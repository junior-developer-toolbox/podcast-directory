import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public activeTab = 'login';
  emailInput = new FormControl('');
  passwordInput = new FormControl('');

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  loginUser() {
    console.log('Logging in as:', this.emailInput.value);
    this.authService
      .login(this.emailInput.value, this.passwordInput.value)
      .then(
        res => {
          console.log(res.user.email, 'successfully logged in!');
        },
        err => {
          console.log('danger', err.message);
        }
      );
    this.clearForm();
  }

  registerUser() {
    console.log('Registering:', this.emailInput.value);
    this.authService
      .register(this.emailInput.value, this.passwordInput.value)
      .then(
        res => {
          console.log(res.user.email, 'was successfully registered!');
        },
        err => {
          console.log('danger', err.message);
        }
      );
    this.clearForm();
  }

  resetUser() {
    console.log('Resetting:', this.emailInput.value);
    this.authService.resetPw(this.emailInput.value).then(res => {
      console.log('Resent link sent to this email address');
    });
    this.clearForm();
  }

  clearForm() {
    this.emailInput.reset();
    this.passwordInput.reset();
  }
}
