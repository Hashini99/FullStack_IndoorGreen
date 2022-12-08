import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantPageComponent } from './components/pages/plant-page/plant-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'search/:search_term', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'plant/:id', component:PlantPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
