import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { DropdownModule } from "primeng/dropdown";
@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    ToastModule
  ]
})
export class SettingModule { }
