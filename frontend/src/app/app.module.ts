import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/other/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantPageComponent } from './components/pages/plant-page/plant-page.component';
import { CartpageComponent } from './components/pages/cartpage/cartpage.component';
import { TitleComponent } from './components/other/title/title.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlantPageComponent,
    CartpageComponent,
    TitleComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
