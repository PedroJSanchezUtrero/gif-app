import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserComponent } from './components/browser/browser.component';
import { FormsModule } from '@angular/forms';
import { ViewerComponent } from './components/viewer/viewer.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    HomePageComponent,
    BrowserComponent,
    ViewerComponent,
    SearchHistoryComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifDashboardModule { }
