import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';
  baseUrl = "http://dev.algoworks.com:9000/api/v0/";

  constructor(public http: Http) { }

  // Load all github users


  


  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }





  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>(res.json()))
  }

   searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`) 
      .map(res => <User[]>(res.json().items))
  }

searchMovies(searchParam: string): Observable<User[]> {
        //var url = 'http://api.themoviedb.org/3/search/movie?query=&query=spider&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
       // var response = this.http.get(url).map(res => <User[]>res.json());
       // return response;


        return this.http.get('http://api.themoviedb.org/3/search/movie?query=&query=spider&api_key=5fbddf6b517048e25bc3ac1bbeafb919') 
      .map(res => <User[]>(res.json().items))

    }

     getAllCategory(): Promise<any> {
     var url = 'http://dev.algoworks.com:9000/api/v0/categories/list';

    return new Promise((resolve, reject) => {
      this.http.get(url).map(res => res.json())
        .subscribe(
        data => {
          resolve(data)
        },
        err => {
          reject(err);
        }
        )
    })
  }

  
}
