import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { MovieService } from '../../providers/Solr-service';
import { UserDetailsPage } from '../user-details/user-details';


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
  providers: [MovieService]
})
export class ReposPage {

  movies: Array<any>;
 
        constructor(private navController: NavController, private movieService: MovieService) {
 
        }
 

 searchMovieDB(event, key) {
        if(event.target.value.length > 2) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    } 
   


  



  ionViewDidLoad() {
    console.log('Hello ReposPage Page');
  }

}
