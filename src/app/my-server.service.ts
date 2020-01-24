import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MyServerService {

  nam;
  pwd;
  myurl = 'http://192.168.1.48:8089/login';
  jsonurl = 'http://localhost:3000/posts';
  postLocal(b){
    console.log(b);
    return this.myhttpclient.post(this.jsonurl,b);

  }
  postapi(a) {
    this.nam=a;
    console.log(this.nam);
    this.postLocal(this.nam);
    // console.log("i m in post api"+a);
    return this.myhttpclient.post(this.myurl, a);

  }
  getlocal(){
    return this.myhttpclient.get(this.jsonurl);
  }


  constructor(private myhttpclient: HttpClient) { }
}
