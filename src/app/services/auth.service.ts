import { AuthState } from './../classes/authState';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject<AuthState>({
    isLoggedIn: false,
    loggedInUser: '',
    isUserVerified: false
  });

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
        this.authState.next({
          isLoggedIn: true,
          loggedInUser: userResponse.email,
          isUserVerified: userResponse.emailVerified
        });
      } else {
        localStorage.setItem('user', null);
        this.authState.next({
          isLoggedIn: false,
          loggedInUser: '',
          isUserVerified: false
        });
      }
    });
  }

  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  async logout() {
    return await this.angularFireAuth.auth.signOut();
  }

  async verify() {
    return await this.angularFireAuth.auth.currentUser.sendEmailVerification();
  }

  async resetPw(email: string) {
    return await this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }
}
