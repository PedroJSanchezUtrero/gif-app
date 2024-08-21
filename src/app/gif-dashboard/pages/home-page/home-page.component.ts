import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-dashboard-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  @ViewChild('drawer') drawer: any;

  constructor() { }

  public toggleDrawer() {
    this.drawer.toggle();
  }
} 
