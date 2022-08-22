import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';

import { HotDrinksRoutingModule } from './hot-drinks-routing.module';
import { HotDrinksComponent } from './hot-drinks.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    HotDrinksComponent
  ],
  imports: [
    CommonModule,
    HotDrinksRoutingModule,
    CarouselModule,
    ButtonModule
    
  ]
})
export class HotDrinksModule { }
