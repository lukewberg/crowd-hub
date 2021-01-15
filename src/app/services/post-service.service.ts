import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Promise<Post> {
    return new Promise((resolve, reject) => {
      this.http.get(
        'http://hardingdevelopment.nexisit.net/harding_api/api_event_search.php?page_num=0&per_page=20&buckets=Volunteering&timezone=25200&app_server_version=3.2&app_version=2&app_build=1&user_id=2&token=70aedda35dca9c192ef551c9f7b570e0&salt=309a9bea4d2695656e83f4fe7b340ee0&app=1&version=3.2'
        ).subscribe(result => {
          resolve(result as Post)
        }, error => {
          reject(error)
        })
    })
  }

}
