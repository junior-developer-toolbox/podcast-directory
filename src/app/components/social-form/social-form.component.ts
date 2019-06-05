import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.sass']
})
export class SocialFormComponent implements OnInit {
  socForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.socForm = this.fb.group({
      email: '',
      facebook: '',
      instagram: '',
      linkedIn: '',
      twitter: '',
      website: ''
    });
  }
}
