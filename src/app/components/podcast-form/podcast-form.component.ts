import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PodcastDataService } from 'src/app/services/podcast-data.service';

@Component({
  selector: 'app-podcast-form',
  templateUrl: './podcast-form.component.html',
  styleUrls: ['./podcast-form.component.sass']
})
export class PodcastFormComponent implements OnInit {
  categories: string[];
  years: number[] = [];

  podForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    yearStarted: new FormControl()
  });

  constructor(private podcastdataService: PodcastDataService) {}

  ngOnInit() {
    this.categories = this.podcastdataService.getCategories();

    // create descending year array starting with current through invention of podcasting
    for (let i = new Date().getFullYear(); i >= 2003; i--) {
      this.years.push(i);
    }
  }

  handleSave() {}
}
