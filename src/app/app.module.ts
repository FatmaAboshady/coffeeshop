import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from "@angular/common/http";
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginModule } from './login/login.module';
import { MoviesModule } from './movies/movies.module';
import { TvModule } from './tv/tv.module';
import { FatmaComponent } from './fatma/fatma.component';
import {CarouselModule} from 'primeng/carousel';
import { AboutcoffeeComponent } from './aboutcoffee/aboutcoffee.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    HomeheaderComponent,
    MoviedetailsComponent,
    FatmaComponent,
    AboutcoffeeComponent,
    DetailsComponent
    
    // ContactUsComponent
    
    
    
  
  ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    LoginModule   ,
    TvModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
