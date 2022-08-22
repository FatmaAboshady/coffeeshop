import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotDrinksComponent } from './hot-drinks.component';

const routes: Routes = [{ path: '', component: HotDrinksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotDrinksRoutingModule { }
