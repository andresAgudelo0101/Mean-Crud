import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  baseApi:string = environment.urlApi;

  constructor(private http:HttpClient) { }

  getAllTweets():Observable<tweet[]>{
    return this.http.get<tweet[]>(this.baseApi + '/tweets')
  }

  addTweet(addTweetRequest:tweet):Observable<tweet>{
    const formatedData = {
      username:addTweetRequest.username,
      tweet:addTweetRequest.tweet
    };
    return this.http.post<tweet>(this.baseApi + '/newTweet', formatedData);
  }

  getTweet(id:string):Observable<tweet>{
    return this.http.get<tweet>(this.baseApi + '/tweets/' + id);
  }

  updateTweet(id:string, updateTweetRequest:tweet):Observable<tweet>{
    return this.http.put<tweet>(this.baseApi + '/updateTweet/' + id ,{tweet:updateTweetRequest.tweet});
  }

  deleteTweet(id:string):Observable<tweet>{
    return this.http.delete<tweet>(this.baseApi + '/deleteTweet/' + id);
  }
}