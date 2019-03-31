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
  type = 'post';
  posts;
  hashtags = [];
  ht = 'All';
  public selectValue = null;

  constructor(private server: ServerService) {
    this.getHT();
    this.filterCat(this.category);
  }
  getHT() {
    this.server.getHashtags().subscribe(ht => {
      for (const element in ht) {
        if (ht[element]._source.category === this.category) {
          this.hashtags.push(ht[element]._source.name);
        }
      }
    });
  }

  filterSN(sn) {
    this.socialNetwork = sn;
    this.filterCat(this.category);
  }

  filterTY(type) {
    this.type = type;
    this.filterCat(this.category);
  }

  filterCat(cat) {
    this.ht = 'All';
    if (this.category !== cat) {
      this.hashtags = [];
      this.category = cat;
      this.getHT();
    }
    if (this.socialNetwork === 'tw' && this.type === 'post') {
      this.server.categoriaTW(this.category).subscribe(tweets => {
        console.log(tweets);
        this.posts = tweets;
      });
    } else if (this.socialNetwork === 'ig' && this.type === 'post') {
      this.server.categoriaIG(this.category).subscribe(tweets => {
        this.posts = tweets;
        console.log(this.posts);
      });
    }
  }

  onChangeHT(ht) {
    console.log(ht);
    this.filterHT(ht);
  }

  filterHT(ht) {
    this.ht = ht;
    if (this.ht !== 'All') {
      if (this.socialNetwork === 'tw' && this.type === 'post') {
        this.server.hashtagTW(ht).subscribe(tweets => {
          this.posts = tweets;
        });
      } else if (this.socialNetwork === 'ig' && this.type === 'post') {
        this.server.hashtagIG(ht).subscribe(tweets => {
          this.posts = tweets;
          console.log(this.posts);
        });
      }
    } else {
      this.filterCat(this.category);
    }
  }

  // ACTIONS this calls the API, but our db doesn't get automatically updated
  like() {
    if (this.socialNetwork === 'ig') {
      this.posts.forEach(post => {
        this.server.likeIG(post._id, 'like').subscribe(res => {
          console.log('liked');
        });
      });
    } else {
      this.posts.forEach(post => {
        this.server.likeTW(post._id, 'like').subscribe(res => {
          console.log('liked');
        });
      });
    }
  }

/*follow() {
    if (this.socialNetwork === 'ig') {
      this.posts.forEach(user => {
        this.server.followIG(user._id, 'like').subscribe(res => {
          console.log('followed');
        });
      });
    } else {
      this.posts.forEach(user => {
        this.server.followTW(user._id, 'like').subscribe(res => {
          console.log('followed');
        });
      });
    }
  }*/
  retweet() {
    this.posts.forEach(post => {
      this.server.followTW(post._id, 'retweet').subscribe(res => {
        console.log('retweeted');
      });
    });
  }

}
