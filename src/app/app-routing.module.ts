import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast/:id', component: PodcastDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
