import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColdDrinksRoutingModule } from './cold-drinks-routing.module';
import { ColdDrinksComponent } from './cold-drinks.component';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

import {SelectItem} from 'primeng/api';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { ProductserviceService } from '../services/productservice.service';
@NgModule({
  declarations: [
    ColdDrinksComponent
  ],
  imports: [
    CommonModule,
    ColdDrinksRoutingModule,
    CarouselModule,
    ButtonModule,
    DataViewModule,
    PaginatorModule,
    TabViewModule,
    DropdownModule,
  RatingModule,
  InputTextModule,
  PanelModule,
  
  ],
   providers:[
    ProductserviceService

   ]
})
export class ColdDrinksModule { }
