import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.sass']
})
export class AccountNavComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  userVerified: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe(state => {
      this.isLoggedIn = state.isLoggedIn;
      this.loggedInUser = state.loggedInUser;
      this.userVerified = state.isUserVerified;
    });
  }

  logout() {
    this.authService.logout();
  }
}
