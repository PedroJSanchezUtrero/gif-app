import { Component, OnInit } from '@angular/core';
import { GifGatewayService } from '../../services/gif-gateway.service';
import { Gif, Datum } from '../../interfaces/gif';

@Component({
  selector: 'gif-dashboard-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit {

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

  onGifClick(gif: Datum): void {
    this.selectedGif = gif;
    document.querySelector('.viewer')?.classList.add('distorted-background');
  }

  onClose(): void {
    this.selectedGif = null;
    document.querySelector('.viewer')?.classList.remove('distorted-background');
  }
}
