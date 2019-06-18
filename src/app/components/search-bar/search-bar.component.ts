import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PodcastDataService } from './../../services/podcast-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  categories: string[];
  searchForm;

  constructor(
    private fb: FormBuilder,
    private podcastdataService: PodcastDataService
  ) {}

  ngOnInit() {
    this.categories = this.podcastdataService.getCategories();
    this.searchForm = this.fb.group({
      keyword: '',
      category: ''
    });
  }

  search() {
    // apply filter to podcast list
  }
}
