import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';

@NgModule({
  declarations: [AppComponent, PodcastListComponent, HeaderComponent, HomeComponent, SearchBarComponent, PodcastDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
