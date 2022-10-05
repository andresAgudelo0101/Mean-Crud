import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTweetComponent } from './components/edit-tweet/edit-tweet.component';
import { NewTweetComponent } from './components/new-tweet/new-tweet.component';
import { TweetsComponent } from './components/tweets/tweets.component';

const routes: Routes = [
  {
    path:'',
    component:TweetsComponent
  },
  {
    path:'newTweet',
    component:NewTweetComponent
  },
  {
    path:'edit/:id',
    component:EditTweetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
