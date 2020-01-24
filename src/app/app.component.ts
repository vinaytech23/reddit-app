import { Component } from '@angular/core';
import { Article } from './reddit-data/Article';
import { myclassX } from './myclass'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interseptorApp';
   p : myclassX = new myclassX();
  //  p.name = 'vinay';


  // articles: Article[];

  constructor(){

  }
}
