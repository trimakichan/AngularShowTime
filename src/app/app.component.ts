import { Component } from '@angular/core';
import {TvshowService} from './service/tvshow.service';
import { ITvApp } from './interface/itv-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-Search';
  
  searchResult: any = []
  // searchResult: ITvApp = {
  //   title: '',
  //   image: '',
  //   description: '',
  //   genre: [],
  //   rating: 0
  // }

  constructor(private TvshowService: TvshowService) {}

  doSearch(searchValue: string) {
    this.TvshowService.getMovieData(searchValue).subscribe(data => {
     console.log(data) 
      this.searchResult = data})
  }


}