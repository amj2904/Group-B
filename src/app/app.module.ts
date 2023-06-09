import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminContactUsDataComponent } from './admin-contact-us-data/admin-contact-us-data.component';
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
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './shared/filter.pipe';
import { TestcheckoutComponent } from './testcheckout/testcheckout.component';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { VendorComponent } from './vendor/vendor.component';
import { TestOrdersComponent } from './test-orders/test-orders.component';
import { ForgetComponent } from './forget/forget.component';
import { UsersignupdataComponent } from './usersignupdata/usersignupdata.component';
import { HelpCentreComponent } from './help-centre/help-centre.component';
import { DisputeListComponent } from './dispute-list/dispute-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    ProductpageComponent,
    AddcartComponent,
    FilterPipe,
    TestcheckoutComponent,
    LoginComponent,
    SignupComponent,
    ThankyouComponent,
    MyOrdersComponent,
    FooterComponent,
    VendorComponent,
    TestOrdersComponent,
    AdminContactUsDataComponent,
    ForgetComponent,
    UsersignupdataComponent,
    HelpCentreComponent,
    DisputeListComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressAnimation: 'increasing',
      progressBar:true,
      positionClass:'toast-bottom-right'
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
