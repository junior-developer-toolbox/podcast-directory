import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';
import { PodcastInfoComponent } from './routes/podcast-info/podcast-info.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast/:id', component: PodcastDetailComponent },
  { path: 'podcast/:id/info', component: PodcastInfoComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
