import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { CartTotalPipe } from './cart-total.pipe';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { SuccessComponent } from './page/success/success.component';

const routes: Routes = [
  { path: 'success', component:  SuccessComponent},
  { path: 'cart', component:  CartComponent},
  { path: 'checkout', component:  CheckoutComponent},
  {path:'',component:HomeComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    HeaderComponent,
    HomeComponent,
    CheckoutComponent,
    CartProductListComponent,
    CartTotalPipe,
    CartTotalComponent,
    CartComponent,
    CheckoutFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
