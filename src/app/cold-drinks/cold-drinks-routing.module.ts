import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ColdDrinksComponent } from './cold-drinks.component';

const routes: Routes = [
{ path: '', component: ColdDrinksComponent },
{ path: 'details', component: DetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColdDrinksRoutingModule { }

