import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';
import { PodcastEditComponent } from './routes/podcast-edit/podcast-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast/:id', component: PodcastDetailComponent },
  { path: 'podcast/:id/edit', component: PodcastEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
