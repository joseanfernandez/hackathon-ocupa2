import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  faSignOut = faSignOutAlt;

  constructor(private auth: AuthService) { }

  signOut() {
    this.auth.logout();
  }

}
