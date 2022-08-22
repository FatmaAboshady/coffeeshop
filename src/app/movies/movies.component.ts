import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
//   trendingMovies:any[]=[];
//   overview:any={}
//   sortOptions: SelectItem[];

//     sortOrder: number;

//     sortField: string;
//   responsiveOptions = [
//     {
//         breakpoint: '1024px',
//         numVisible: 3,
//         numScroll: 3
//     },
//     {
//         breakpoint: '768px',
//         numVisible: 2,
//         numScroll: 2
//     },
//     {
//         breakpoint: '560px',
//         numVisible: 1,
//         numScroll: 1
//     }
// ];
//   imgPrefix:string='https://image.tmdb.org/t/p/w500/'
//   constructor( private _movieService:MoviesService ){
//     _movieService.getTrending().subscribe((data)=>{
//        console.log(data)
//     //   this.trendingMovies=data.results
//     //   console.log(data.overview)
//     //   this.sortOptions = [
//     //     {label: 'Price High to Low', value: '!price'},
//     //     {label: 'Price Low to High', value: 'price'}
//     // ];

//     //   console.log(this.overview)
//     //   console.log(this.trendingMovies);
      
       
//     });
//   }
  ngOnInit(): void {
  }
//   onSortChange(event:any) {
//     let value = event.value;

//     if (value.indexOf('!') === 0) {
//         this.sortOrder = -1;
//         this.sortField = value.substring(1, value.length);
//     }
//     else {
//         this.sortOrder = 1;
//         this.sortField = value;
//     }
// }

}
