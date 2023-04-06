import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductpageComponent } from './productpage/productpage.component';
import { AddcartComponent } from './cart/addcart/addcart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    ProductpageComponent,
    AddcartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
