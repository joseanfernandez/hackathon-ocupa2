import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authState = null;
  admin;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {

    // Remembers login
    this.afAuth.authState.subscribe(res => {
      this.authState = res;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (this.authState) {
      return this.authState.displayName || 'User without a Name';
    }
  }

  /* ****** LOGIN / REGISTRATION / LOGOUT ****** */

  // Registration
  emailReg(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.authState = user.user;
    }).catch(error => console.log(error));
  }

  // Login
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.authState = user;
    }).catch(error => console.log(error));
  }

  // Logout
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.authState = null;
  }
}
