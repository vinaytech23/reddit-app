import { Component, OnInit } from '@angular/core';
import { Article } from '../reddit-data/Article';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  articles: Article[];

  add(title:HTMLInputElement, link:HTMLInputElement){

    console.log(title.value + "   "+link.value);
    this.articles.push(new Article(title.value,link.value,0));
     title.value='';
     link.value='';
     return false;

  }
  sorted(){
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }


  constructor() {
    this.articles = [
      new Article('Angular 2','http://angular.io',67),
      new Article('Fullstack web','http://fullstack.io',46),
      new Article('Bootstrap 4', 'http://bootstrap',27),
    ];
   }

  ngOnInit() {
  }

}
