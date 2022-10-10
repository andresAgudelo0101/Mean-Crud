import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tweet } from 'src/app/models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {


@Input() tweet: tweet = {} as tweet;
@Output() tweetEmitter = new EventEmitter<tweet>();
@Output() like = new EventEmitter;

img2:string = "assets/like.png";
img1:string = "assets/like2.png";


isLike:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  confirmDelete(){
    this.tweetEmitter.emit(this.tweet)
  }

  handleLike(){
    this.like.emit(this.isLike = !this.isLike);
  }
  

}
