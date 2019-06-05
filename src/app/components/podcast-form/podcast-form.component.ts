import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PodcastDataService } from 'src/app/services/podcast-data.service';

@Component({
  selector: 'app-podcast-form',
  templateUrl: './podcast-form.component.html',
  styleUrls: ['./podcast-form.component.sass']
})
export class PodcastFormComponent implements OnInit {
  categories: string[];
  years: number[];
  podForm;

  constructor(
    private fb: FormBuilder,
    private podcastdataService: PodcastDataService
  ) {}

  ngOnInit() {
    this.podForm = this.fb.group({
      title: '',
      description: '',
      category: '',
      yearStarted: '',
      hosts: this.fb.array([])
    });

    this.addHost();

    this.categories = this.podcastdataService.getCategories();

    this.years = this.podcastdataService.getYears();
  }

  get hostForms() {
    return this.podForm.get('hosts') as FormArray;
  }

  addHost() {
    const host = this.fb.group({
      firstName: '',
      lastName: ''
    });
    this.hostForms.push(host);
  }

  deleteHost(i) {
    this.hostForms.removeAt(i);
  }

  consoleData() {
    console.log(this.podForm.value);
  }
}
