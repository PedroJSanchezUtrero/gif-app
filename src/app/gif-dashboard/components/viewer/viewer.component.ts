import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifGatewayService } from '../../services/gif-gateway.service';
import { Gif, Datum } from '../../interfaces/gif';

@Component({
  selector: 'gif-dashboard-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit, AfterViewInit  {

  @ViewChild('viewer') viewer!: ElementRef;

  public gifs: Gif = {} as Gif;
  public selectedGif: Datum | null = null;
  public hasReachedMaxRequests: boolean = false;

  constructor(private gifGatewayService: GifGatewayService) { }

  ngOnInit(): void {
    this.gifGatewayService.getGif().subscribe((data: Gif) => {
        this.gifs = data;
    });

    this.gifGatewayService.getHasReachedMaxRequests().subscribe((value: boolean) => {
      this.hasReachedMaxRequests = value;
    });
  }

  ngAfterViewInit(): void {
    this.gifGatewayService.setViewerElement(this.viewer);
    console.log('Viewer element:', this.viewer);
  }

  onGifClick(gif: Datum): void {
    this.selectedGif = gif;
    document.querySelector('.viewer')?.classList.add('distorted-background');
  }

  onClose(): void {
    this.selectedGif = null;
    document.querySelector('.viewer')?.classList.remove('distorted-background');
  }
}
