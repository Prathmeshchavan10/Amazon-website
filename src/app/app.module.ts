import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
 import { HttpClientModule } from '@angular/common/http';  //api -1
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { pipe } from 'rxjs';

import { FilterPipe } from 'src/pipe_filter/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    
    HeaderNavComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
   
   
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, MatFormFieldModule,
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
