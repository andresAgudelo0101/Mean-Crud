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

  constructor() { }

  ngOnInit(): void {
  }

  confirmDelete(){
    this.tweetEmitter.emit(this.tweet)
  }

}
