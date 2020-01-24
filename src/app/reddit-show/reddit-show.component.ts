import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../reddit-data/Article';

@Component({
  selector: 'app-reddit-show',
  templateUrl: './reddit-show.component.html',
  styleUrls: ['./reddit-show.component.css']
})
export class RedditShowComponent implements OnInit {
  // title;
  // link;
  // votes;

  article: Article;
  constructor() {
    // this.article = new Article("vinay","http://vinay.com",85);
    // this.article = new Article('Angular--8---', 'http://angularad.io',86);
    console.log('in redit-show compoent')
    console.log(this.articleX);
    // this.title = "Angular exp-8";
    // this.link='http://angular.io';
    // this.votes = 92;
   }

  // voteup(){
  //   this.article.votes +=1;
  //   console.log("in voteup");
  //   return false;
  // }
  // votedown(){
  //   this.article.votes -=1;
  //   console.log("in votedown");
  //   return false;
  // }


  @Input() articleX: Article;

  ngOnInit() {
  }

}
