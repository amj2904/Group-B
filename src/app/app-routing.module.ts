import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AddcartComponent } from './cart/addcart/addcart.component';

const routes: Routes = [
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
