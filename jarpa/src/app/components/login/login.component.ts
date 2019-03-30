import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email;
  password;
  nname;
  nemail;
  npassword;
  error = false;

  constructor(private auth: AuthService,
              private router: Router) {

  }

  signIn() {
    this.auth.emailLogin(this.email, this.password)
      .then(res => {
        if (this.auth.currentUser) {
          this.router.navigate(['/']);
        } else {
          this.error = true;
        }
      });
  }

  signUp() {
    this.auth.emailReg(this.nemail, this.npassword)
      .then(res => this.router.navigate(['/']));
  }

}
