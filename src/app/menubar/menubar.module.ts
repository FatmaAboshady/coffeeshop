import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarRoutingModule } from './menubar-routing.module';
import { MenubarComponent } from './menubar.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MenubarRoutingModule,
    ReactiveFormsModule
    

  ]
})
export class MenubarModule { }
