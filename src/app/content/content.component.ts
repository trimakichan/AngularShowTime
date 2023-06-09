import { Component, Input } from '@angular/core';
import { TvshowService } from '../service/tvshow.service';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

constructor(private TvshowService: TvshowService) {}

  @Input() tvDataResult: any;

  searchResult: any = []
  movieDataResult: any = []
  


  doSearch(searchValue: string) {
    console.log(searchValue)
    this.TvshowService.getMovieData(searchValue).subscribe(result => {
    console.log(result)
    this.movieDataResult = result.results})
    console.log("MovieDataResult:", this.movieDataResult)

}

}