import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import {SelectItem} from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  
  
  trendingMovies:any[]=[];
  products:any[]=[];
  eachproduct:any[]=[];

  overview:any={}
  sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;
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
  constructor( private _product:ProductserviceService ,private _httpClinent:HttpClient ){
    
   

    
    

    // this.products = _product.products;
    // console.log( 'cold- ');
    // console.log(this.products);


    // this.eachproduct =_product.eachproduct;
    // console.log( 'cold- ');
    // console.log(this.eachproduct);
  }
  ngOnInit(): void {
    this._product.allcategoriesapicall(1).subscribe(
      (data: any)=>{
        console.log(data)
        this.products = data
        console.log('products');
        console.log(this.products);
        
        
      }
      ,(error: any)=>{
        console.log(error)
      }

    )
  }

}
