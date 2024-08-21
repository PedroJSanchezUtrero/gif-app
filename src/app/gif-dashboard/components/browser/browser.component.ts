import { Component, OnInit } from '@angular/core';
import { GifGatewayService } from '../../services/gif-gateway.service';

@Component({
  selector: 'gif-dashboard-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  public searchQuery: string = '';

  constructor(private gifGatewayService: GifGatewayService) { }

  ngOnInit(): void {
    this.gifGatewayService.getBrowserInputValue().subscribe(query => {
      this.searchQuery = query;
    });
  }

  searchGifs() {
    this.gifGatewayService.fetchGifs(this.searchQuery);
  }
}