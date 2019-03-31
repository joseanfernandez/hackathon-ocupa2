import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  server_url = environment.serverEndpointLocal;
  tw = '/twitter/';
  ig = '/instagram/';

  constructor(private http: HttpClient) { }

  // GENERAL
  getHashtags() {
    const url = '/hashtags';
    return this.http.get(this.server_url + url);
  }


  // TWITTER
  followTW(user_id, action) {
    const url = this.tw + 'follow?id=' + user_id + '&action=' + action;
    return this.http.get(this.server_url + url);
  }

  likeTW(tweet_id, action) {
    const url = this.tw + 'like?id=' + tweet_id + '&action=' + action;
    return this.http.get(this.server_url + url);
  }

  retweetTW(tweet_id, action) {
    const url = this.tw + 'retweet?id=' + tweet_id + '&action=' + action;
    return this.http.get(this.server_url + url);
  }

  categoriaTW(category) {
    const url = this.tw + 'getTweets/category?name=' + category;
    console.log(this.server_url + url);
    return this.http.get(this.server_url + url);
  }

  hashtagTW(hashtag) {
    const url = this.tw + 'getTweets/hashtag?name=' + hashtag;
    return this.http.get(this.server_url + url);
  }

  saveTW(hashtag) {
    const url = this.tw + 'saveTweetsFromApi?name=' + hashtag;
    return this.http.get(this.server_url + url);
  }

  // INSTAGRAM

  followIG(user_id, action) {
    const url = this.ig + 'follow?id=' + user_id + '&action=' + action;
    return this.http.get(this.server_url + url);
  }

  likeIG(post_id, action) {
    const url = this.ig + 'like?id=' + post_id + '&action=' + action;
    return this.http.get(this.server_url + url);
  }

  categoriaIG(category) {
    const url = this.ig + 'getPosts/category?name=' + category;
    console.log(this.server_url + url);
    return this.http.get(this.server_url + url);
  }

  hashtagIG(hashtag) {
    const url = this.ig + 'getPosts/hashtag?name=' + hashtag;
    return this.http.get(this.server_url + url);
  }

  saveIG(hashtag) {
    const url = this.ig + 'savePostsFromApi?name=' + hashtag + '&type=top_media';
    return this.http.get(this.server_url + url);
  }
}
