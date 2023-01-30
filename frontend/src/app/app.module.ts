import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/other/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantPageComponent } from './components/pages/plant-page/plant-page.component';
import { CartpageComponent } from './components/pages/cartpage/cartpage.component';
import { TitleComponent } from './components/other/title/title.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ToastrModule}from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

import { OrderItemListComponent } from './components/other/order-item-list/order-item-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentpageComponent } from './components/pages/paymentpage/paymentpage.component';
import { PaypalComponent } from './components/other/paypal/paypal.component';
import { ChatAppComponent } from './components/pages/chat-app/chat-app.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlantPageComponent,
    CartpageComponent,
    TitleComponent,

    LoginPageComponent,
    RegisterPageComponent,
    CheckoutPageComponent,

    OrderItemListComponent,
      PaymentpageComponent,
      PaypalComponent,
      ChatAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      // positionClass:'toast-bottom-right',
      // newestOnTop:false

      maxOpened: 1,
      progressBar: true,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
    }),
    FontAwesomeModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
