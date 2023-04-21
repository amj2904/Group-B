import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestcheckoutComponent } from './testcheckout/testcheckout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { VendorComponent } from './vendor/vendor.component';
import { TestOrdersComponent } from './test-orders/test-orders.component';
import { AdminContactUsDataComponent } from './admin-contact-us-data/admin-contact-us-data.component';

const routes: Routes = [
  {
    path:'', redirectTo:'productpage', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'productdashboard', component:ProductDashboardComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'addproduct',component:ProductDashboardComponent
  },
  {
    path:'productpage',component:ProductpageComponent
  },

  {
    path:'addtocart',component:AddcartComponent
  },
  {
    path:'checkout',component:TestcheckoutComponent,canActivate:[AuthGuard]
  },
  {
    path:'thankyou',component:ThankyouComponent
  },
  {
    path:'my-orders',component:MyOrdersComponent
  },
  {
    path:'footer',component:FooterComponent
  },{
    path:'vendor',component:VendorComponent
  },
  {
    path:'ashwinorders',component:TestOrdersComponent
  },
  {
    path:'contact', component:AdminContactUsDataComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
