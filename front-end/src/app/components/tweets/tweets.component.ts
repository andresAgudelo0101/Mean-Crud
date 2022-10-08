import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tweet } from 'src/app/models/tweet.model';
import { TweetsService } from 'src/app/services/tweets.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets:tweet[] = [];
  card: tweet[] = [];

  constructor(private tweetService:TweetsService,private router:Router) { }

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

  confirmDelete(tweet:tweet){
    if(confirm('deseas eliminar este tweet?')){
      this.deleteTweet(tweet._id)
    }
  }

  deleteTweet(id:string){
    this.tweetService.deleteTweet(id)
    .subscribe({
      next:()=>{
        location.reload()
      }
    })
  }

}
