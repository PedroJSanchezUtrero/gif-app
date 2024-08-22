import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Gif } from '../interfaces/gif';

@Injectable({
  providedIn: 'root'
})
export class GifGatewayService {

  private gifData: BehaviorSubject<Gif> = new BehaviorSubject<Gif>({} as Gif);
  private lastQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private browserInputValue: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private hasReachedMaxRequests: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    this.fetchGifs(environment.defaultSearch);
  }

  public fetchGifs(query: string): void {
    if (this.shouldSkipFetch(query)) {
      return;
    }
  
    this.makeHttpRequest(query).subscribe((data) => {
      if (data) {
        this.gifData.next(data);
        this.lastQuery.next(query);
      }
    });
  }

  public getGif(): Observable<Gif> {
    return this.gifData.asObservable();
  }

  public getLastQuery(): Observable<string> {
    return this.lastQuery.asObservable();
  }

  public getHasReachedMaxRequests(): Observable<boolean> {
    return this.hasReachedMaxRequests.asObservable();
  }

  public updateBrowserInputValue(query: string): void {
    this.browserInputValue.next(query);
  }
  
  public getBrowserInputValue(): Observable<string> {
    return this.browserInputValue.asObservable();
  }

  private getLastQueryValue(): string {
    return this.lastQuery.getValue();
  }

  private getHasReachedMaxRequestsValue(): boolean {
    return this.hasReachedMaxRequests.getValue();
  }

  private shouldSkipFetch(query: string): boolean {
    return this.getLastQueryValue() === query || query === '' || this.getHasReachedMaxRequestsValue();
  }

  private makeHttpRequest(query: string): Observable<Gif | null> {
    return this.http.get<Gif>(`${environment.apiUrl}${query}`).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleHttpError(error);
        return of(null);
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    if (error.status === 429) {
      this.hasReachedMaxRequests.next(true);
    } else {
      console.error('Error fetching GIFs', error);
    }
  }
}