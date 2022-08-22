import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FatmaComponent } from './fatma/fatma.component';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ 
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'tv', loadChildren: () => import('./tv/tv.module').then(m => m.TvModule) }, 
  { path: 'network', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'menubar', loadChildren: () => import('./menubar/menubar.module').then(m => m.MenubarModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'moviedetails/:id', component: MoviedetailsComponent },
  { path: 'fatma', component: FatmaComponent },

  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'cold-drinks', loadChildren: () => import('./cold-drinks/cold-drinks.module').then(m => m.ColdDrinksModule) },
  { path: 'hot-drinks', loadChildren: () => import('./hot-drinks/hot-drinks.module').then(m => m.HotDrinksModule) },
  { path: 'cart', canActivate:[AuthGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', component: HomeheaderComponent },

  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
