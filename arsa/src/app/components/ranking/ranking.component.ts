import { Component } from '@angular/core';

import { ServerService } from '../../services/server.service';

import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  faHashtag = faHashtag;
  faFilter = faFilter;
  faDumbbell = faDumbbell;
  faUtensils = faUtensils;
  faCarSide = faCarSide;
  faTshirt = faTshirt;
  faLaptop = faLaptop;
  faUser = faUser;
  faUsers = faUsers;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faComment = faComment;
  faInfo = faInfo;
  faImage = faImage;
  faGlobe = faGlobe;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  socialNetwork = 'tw';
  category = 'fitness';
  searchText = '';
  type = 'post';
  posts: any;

  constructor(private server: ServerService) {
    // this.filterCat(this.category);
  }

  filterSN(sn) {
    this.socialNetwork = sn;
    // this.filterCat(this.category);
  }

  filterCat(cat) {
    this.category = cat;
    if (this.socialNetwork === 'tw') {
      /*this.server.categoriaTW(this.category).subscribe(tweets => {
        this.posts = tweets;
      });*/
    } else {
      /*this.server.categoriaIG(this.category).subscribe(tweets => {
        this.posts = tweets;
        console.log(this.posts);
      });*/
    }
    console.log(this.posts);
  }

}
