import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAttributeComponent } from './comp-attribute/comp-attribute.component';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
