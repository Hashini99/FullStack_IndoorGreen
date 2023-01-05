import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './components/pages/cartpage/cartpage.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantPageComponent } from './components/pages/plant-page/plant-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'search/:search_term', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'plant/:id', component:PlantPageComponent},
{path:'cartpage', component: CartpageComponent},
{path:'login', component: LoginPageComponent},
{path:'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
