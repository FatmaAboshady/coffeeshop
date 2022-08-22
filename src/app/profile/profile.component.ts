import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[]=[];

  constructor( private _product:ProductserviceService) { }

  ngOnInit(): void {
    this._product.profile().subscribe(
      (data: any)=>{
        console.log(data)
        this.profile = data
        console.log('profile');
        console.log(this.profile);
        
        
      }
      ,(error: any)=>{
        console.log(error)
      }

    )
  }

}
