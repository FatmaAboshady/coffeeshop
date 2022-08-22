import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
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

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    CarouselModule,
    ButtonModule,
    DataViewModule,
    PaginatorModule,
    TabViewModule,
    DropdownModule,
  RatingModule,
  InputTextModule,
  PanelModule
  
  ],
  exports: [MoviesComponent],
})
export class MoviesModule { }
