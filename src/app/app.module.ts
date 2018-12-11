import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FouterComponent } from './Components/fouter/fouter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    FouterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
