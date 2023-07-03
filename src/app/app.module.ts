import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ApiService } from './api.service';
import { CartsComponent } from './carts/carts.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: CartsComponent }];

@NgModule({
  declarations: [AppComponent, ProductTableComponent, CartsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ApiService],

  bootstrap: [AppComponent],
})
export class AppModule {}
