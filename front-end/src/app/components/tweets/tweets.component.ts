import { Component, OnInit } from '@angular/core';
import { tweet } from 'src/app/models/tweet.model';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets:tweet[] = [];

  constructor(private tweetService:TweetsService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets()
    .subscribe({
      next:(tweets) => {
        this.tweets = tweets;
      },
      error:(response) => {
        console.debug(response);
      }
    });

  }

}
