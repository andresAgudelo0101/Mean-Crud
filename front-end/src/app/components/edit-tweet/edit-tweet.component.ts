import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { tweet } from 'src/app/models/tweet.model';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {

  singleTweet:tweet = {
    _id:'',
    username:'',
    tweet:'',
    updated:''
  };

  constructor(private route: ActivatedRoute,private router:Router, private tweetService:TweetsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');
        if(id){
          this.tweetService.getTweet(id)
          .subscribe({
            next:(response) => {
              this.singleTweet = response;
            }
          });
        }
      }
    });
  }

  updateTweet(){
    this.tweetService.updateTweet(this.singleTweet._id,this.singleTweet)
    .subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['']);
      }
    });
  }
}
