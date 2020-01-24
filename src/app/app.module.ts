import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListdataComponent } from './listdata/listdata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditShowComponent } from './reddit-show/reddit-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListdataComponent,
    ShowdataComponent,
    RedditComponent,
    RedditShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
