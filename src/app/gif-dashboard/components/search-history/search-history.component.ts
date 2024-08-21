import { Component, OnInit } from '@angular/core';
import { GifGatewayService } from '../../services/gif-gateway.service';
import { Search } from '../../interfaces/search';

@Component({
  selector: 'gif-dashboard-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {
  public searchHistory: Search[] = [];

  constructor(private gifGatewayService: GifGatewayService) { }

  ngOnInit(): void {
    this.loadSearchHistory();
    this.updateSearchHistory();
  }

  public toggleLike(query: string): void {
    const search = this.searchHistory.find(search => search.query === query);
    if (search) {
      search.liked = !search.liked;
      this.saveSearchHistory();
      this.sortSearchHistory();
    }
  }

  public deleteSearch(query: string): void {
    const index = this.searchHistory.findIndex(search => search.query === query);
    if (index !== -1) {
      this.searchHistory.splice(index, 1);
      this.saveSearchHistory();
    }
  }

  public performSearch(query: string): void {
    this.gifGatewayService.fetchGifs(query);
    this.gifGatewayService.updateBrowserInputValue(query);
  }

  private updateSearchHistory(): void {
    this.gifGatewayService.getLastQuery().subscribe((query) => {
      if (!query.trim()) {
        return;
      }
      const existingSearch = this.searchHistory.find(search => search.query === query);
      if (!existingSearch) {
        if (this.searchHistory.length === 10) {
          const indexToRemove = this.searchHistory.slice().reverse().findIndex(search => !search.liked);
          if (indexToRemove !== -1) {
            this.searchHistory.splice(this.searchHistory.length - 1 - indexToRemove, 1);
          } else {
            this.searchHistory.pop();
          }
        }
        this.searchHistory.unshift({ query, liked: false });
        this.saveSearchHistory();
      }
      this.sortSearchHistory();
    });
  }


  private saveSearchHistory(): void {
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  private loadSearchHistory(): void {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      this.searchHistory = JSON.parse(savedHistory);
    }
  }

  private sortSearchHistory(): void {
    this.searchHistory.sort((a, b) => Number(b.liked) - Number(a.liked));
  }
}