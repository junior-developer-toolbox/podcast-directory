import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDataService } from '../../services/podcast-data.service';
import { Podcast } from '../../classes/podcast';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.component.html',
  styleUrls: ['./podcast-info.component.sass']
})
export class PodcastInfoComponent implements OnInit {
  podId: number;
  private sub: any;
  podcast: Podcast;
  progress: number;

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

    this.progress = 1;
  }

  lastPage() {
    this.progress--;
  }

  nextPage() {
    this.progress++;
  }

  savePodcast() {}
}
