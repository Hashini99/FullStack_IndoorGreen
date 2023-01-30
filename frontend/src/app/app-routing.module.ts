import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './components/pages/cartpage/cartpage.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantPageComponent } from './components/pages/plant-page/plant-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { PaymentpageComponent } from './components/pages/paymentpage/paymentpage.component';
import { AuthGuard } from './auth/auth.guard';
import { ChatAppComponent } from './components/pages/chat-app/chat-app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'search/:search_term', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'plant/:id', component:PlantPageComponent},
{path:'cartpage', component: CartpageComponent},
{path:'login', component: LoginPageComponent},
{path:'register', component: RegisterPageComponent},
{path:'checkout', component: CheckoutPageComponent,canActivate:[AuthGuard]},
{path:'payment', component: PaymentpageComponent, canActivate:[AuthGuard]},
{path:'chat', component:  ChatAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
