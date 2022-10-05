import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tweet } from 'src/app/models/tweet.model';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {

  addTweetRequest:tweet = {
    _id:'',
    username:'',
    tweet:'',
    updated:''
  };

  constructor(private tweetService:TweetsService, private router:Router) { }

  ngOnInit(): void {
  }

  addTweet(){
    this.tweetService.addTweet(this.addTweetRequest).subscribe({
      next:(tweet) => {
        this.router.navigate(['']);
      }
    });
  }

}
