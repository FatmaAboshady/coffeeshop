import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { MoviesService } from '../services/movies.service';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  trendingTv:any=[];
  overview:any={}
  responsiveOptions = [
    {

        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];


  imgPrefix:string='https://image.tmdb.org/t/p/w500/'
  constructor( private _product:ProductserviceService  ){

    // _product.getProducts().subscribe((data)=>{
    //   console.log(data);
      
    //   // this.trendingTv=data.results
    //   // console.log(this.trendingTv);
      
  
    // });
  
  }
  ngOnInit(): void {
    
  }

}
