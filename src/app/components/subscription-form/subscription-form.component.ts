import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.sass']
})
export class SubscriptionFormComponent implements OnInit {
  subForm;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subForm = this.fb.group({
      apple: '',
      breaker: '',
      google: '',
      overcast: '',
      radioPublic: '',
      rss: '',
      spotify: '',
      stitcher: '',
      tuneIn: ''
    });
  }
}
