import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductoComponenteComponent } from './producto-componente/producto-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponenteComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
