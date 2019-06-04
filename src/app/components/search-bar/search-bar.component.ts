import { Component, OnInit } from '@angular/core';

import { PodcastDataService } from './../../services/podcast-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  categories: string[];

  constructor(private podcastdataService: PodcastDataService) {}

  ngOnInit() {
    this.categories = this.podcastdataService.getCategories();
  }
}
