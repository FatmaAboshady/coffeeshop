import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './menubar.component';

const routes: Routes = [{ path: '', component: MenubarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenubarRoutingModule { }
