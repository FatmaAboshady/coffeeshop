import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { CustomvalidationService } from '../services/customvalidation.service';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  messagesucces:boolean=false
  messagedeletesucces:boolean=false
  coldproducts:any=[];
  hotproducts:any=[]
  error:string=''
// isRegister:boolean=false

arra={}
 profileForm = this.fb.group({
   name: ['', [Validators.required]],
   imageUrl: ['', [Validators.required]],
   price: ['', Validators.required],
   description: ['', [Validators.required]],
   categoryId: ['', [Validators.required]],


  

   
 },
 )
 ;


 constructor(private fb: FormBuilder, private _product:ProductserviceService ,    private customValidator: CustomvalidationService, private _authservice:AuthService , private _router:Router) { }
 ngOnInit(): void {
  

  this._product.allcategoriesapicall(1).subscribe(
    (data: any)=>{
      console.log(data)
      this.coldproducts = data
      console.log('products');
      console.log(this.coldproducts);
      
      
    }
    ,(error: any)=>{
      console.log(error)
    }

  )

  this._product.allcategoriesapicall(2).subscribe(
    (data: any)=>{
      console.log(data)
      this.hotproducts = data
      console.log('products');
      console.log(this.coldproducts);
      
      
    }
    ,(error: any)=>{
      console.log(error)
    }

  )
}
clear(){
  //call delete Api with this product id
 this.profileForm.reset()
}
add(){
  
 console.log('hello');
 this.arra=this.profileForm.value;
 console.log('array');
 
 console.log(this.arra);
 this._product.addapicall(this.profileForm.value).subscribe(
  (data)=>{
  console.log(data)
 if(data){
  this.messagesucces=true
  this.clear()
 }
 else{
  this.messagesucces=false
 }
},(error: any)=>{
    console.log(error)
  }
 )
  


 
 console.log(this.profileForm.value);
 
}
delete(productid:any){
  console.log(productid)
  this._product.deleteapicall(productid).subscribe(
    (data)=>{
    console.log(data)
    if(data=true){
      this.messagedeletesucces=true
    }else{
      this.messagedeletesucces=false
    }
  
  },(error: any)=>{
      console.log(error)
    }
   )

}
}