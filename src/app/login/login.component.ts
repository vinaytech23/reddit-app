import { Component, OnInit } from '@angular/core';
import { MyServerService } from '../my-server.service';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  mytoken;
  postData(){
    console.log(this.loginform.value);
    this.loginService.postapi(this.loginform.value).subscribe(
      myresponse =>
      {
        console.log(myresponse);
        this.mytoken = myresponse;
        // console.log(this.mytoken.authorization.slice(7));
        localStorage.setItem('tkn', this.mytoken.authorization);
        // this.mytoken = localStorage.getItem('tkn');
      }
      );
      this.getData();
  }
  getData(){
    this.loginService.getlocal().subscribe(myres => {console.log(myres); })
  }
  constructor(private loginService: MyServerService, private fb: FormBuilder) { }
  ngOnInit() {
  }
}
