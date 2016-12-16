import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class JsonParsing {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=spider&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }

     getAllCategory(): Promise<any> {
     var url = 'http://dev.algoworks.com:9000/api/v0/category';

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