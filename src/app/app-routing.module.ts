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
import { HelpCentreComponent } from './help-centre/help-centre.component';
import { DisputeListComponent } from './dispute-list/dispute-list.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },

  {
    path: 'disputelist', component:DisputeListComponent
  },

  {
      path: 'helpcentre', component:HelpCentreComponent
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
    path:'checkout',component:TestcheckoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
