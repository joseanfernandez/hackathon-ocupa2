import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {

  hashtags;
  categories = ['fashion', 'fitness', 'food', 'travel', 'tech'];

  constructor(private server: ServerService) {
    this.server.getHashtags().subscribe(ht => {
      this.hashtags = ht;
    });
  }

  saveHT(ht) {
    console.log('saving ' + ht);
    this.server.saveIG(ht).subscribe(saved => {
      console.log(ht + ' saved');
    });
    this.server.saveTW(ht).subscribe(saved => {
      console.log(ht + ' saved');
    });
  }

  ngOnInit() {
  }

}
