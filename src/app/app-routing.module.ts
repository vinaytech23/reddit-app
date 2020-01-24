import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedditComponent } from './reddit/reddit.component';


const routes: Routes = [
                          {path:"login",component:LoginComponent},
                          {path:'reddit',component:RedditComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
