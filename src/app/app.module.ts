import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './components/header/header.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// Structure & Routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    PodcastDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
