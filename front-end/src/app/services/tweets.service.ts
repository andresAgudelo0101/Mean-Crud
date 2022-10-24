import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  baseApi:string = 'https://mean-crud-fake-tweet-api.up.railway.app';
  baseApi2:string = 'https://tweeter-api.onrender.com';

  constructor(private http:HttpClient) { }

  getAllTweets():Observable<tweet[]>{
    return this.http.get<tweet[]>(this.baseApi + '/tweets')
  }

  addTweet(addTweetRequest:tweet):Observable<tweet>{
    const formatedData = {
      username:'@' + addTweetRequest.username,
      tweet:addTweetRequest.tweet
    };
    return this.http.post<tweet>(this.baseApi2 + '/newTweet', formatedData);
  }

  getTweet(id:string):Observable<tweet>{
    return this.http.get<tweet>(this.baseApi2 + '/tweets/' + id);
  }

  updateTweet(id:string, updateTweetRequest:tweet):Observable<tweet>{
    return this.http.put<tweet>(this.baseApi2 + '/updateTweet/' + id ,{tweet:updateTweetRequest.tweet});
  }

  deleteTweet(id:string):Observable<tweet>{
    return this.http.delete<tweet>(this.baseApi2 + '/deleteTweet/' + id);
  }
}
