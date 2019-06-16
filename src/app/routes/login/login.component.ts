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
    console.log('Logging in:', this.emailInput.value);
    this.authService
      .login(this.emailInput.value, this.passwordInput.value)
      .then(
        res => {
          console.log(res);
          console.log('success', 'Successfully Logged In!');
        },
        err => {
          console.log('danger', err.message);
        }
      );
  }

  registerUser() {
    console.log('Registering:', this.emailInput.value);
    this.authService
      .register(this.emailInput.value, this.passwordInput.value)
      .then(
        res => {
          console.log(res);
          console.log('success', 'Successfully Registered!');
        },
        err => {
          console.log('danger', err.message);
        }
      );
  }

  resetUser() {
    console.log('Resetting:');
    console.table({ email: this.emailInput.value });
  }

  logout() {
    console.log('Logging out');
    this.authService.logout().then(() => {});
  }
}
