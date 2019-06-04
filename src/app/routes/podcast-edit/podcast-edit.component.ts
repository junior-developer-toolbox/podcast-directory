import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDataService } from './../../services/podcast-data.service';
import { Podcast } from './../../classes/podcast';

@Component({
  selector: 'app-podcast-edit',
  templateUrl: './podcast-edit.component.html',
  styleUrls: ['./podcast-edit.component.sass']
})
export class PodcastEditComponent implements OnInit {
  podId: number;
  private sub: any;
  podcast: Podcast;

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
}
