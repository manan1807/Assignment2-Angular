import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route5Component } from './route5/route5.component';
import { FormsModule } from '@angular/forms';
import { Route4Component } from './route4/route4.component';
import { Route6Component } from './route6/route6.component';
import { Route3Module } from './route3/route3.module';
import { Route2Module } from './route2/route2.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
