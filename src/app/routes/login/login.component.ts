import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public activeTab = 'login';
  emailInput = new FormControl('');
  passwordInput = new FormControl('');

  constructor() {}

  ngOnInit() {}

  loginUser() {
    console.log('Logging in:');
    console.table({
      email: this.emailInput.value,
      password: this.passwordInput.value
    });
  }

  registerUser() {
    console.log('Registering:');
    console.table({
      email: this.emailInput.value,
      password: this.passwordInput.value
    });
  }

  resetUser() {
    console.log('Resetting:');
    console.table({ email: this.emailInput.value });
  }
}
