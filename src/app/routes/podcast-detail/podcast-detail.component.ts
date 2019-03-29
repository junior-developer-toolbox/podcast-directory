import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PodcastDataService } from './../../services/podcast-data.service';
import { Podcast } from './../../classes/podcast';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.sass']
})
export class PodcastDetailComponent implements OnInit, OnDestroy {
  podId: number;
  private sub: any;
  podcast: Podcast;

  podcasts = '';

  constructor(
    private route: ActivatedRoute,
    private podcastDataService: PodcastDataService
  ) {}

  ngOnInit() {
    // get podcast id from route params
    this.sub = this.route.params.subscribe(params => {
      this.podId = +params['id'];
    });

    // retrieve podcast data
    this.podcast = this.podcastDataService.getOnePodcast(this.podId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
