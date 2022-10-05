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
}
