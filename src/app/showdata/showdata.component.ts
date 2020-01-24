import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  @Input() catchname:string;
  @Input() nameArray;
  @Input() bnum;

  constructor() { }

  ngOnInit() {
  }

}
