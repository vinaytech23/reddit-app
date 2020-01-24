import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {

  names = ['vinay', 'neelima', 'prashu', 'chandu', 'simran'];
  constructor() { }

  ngOnInit() {
  }

}
