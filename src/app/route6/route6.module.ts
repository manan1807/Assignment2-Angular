import { NgModule } from '@angular/core';

import { Route6RoutingModule } from './route6-routing.module';
import { Route6Component } from './route6.component';
import { SharedModule } from '../shared.module';
import { Range } from './range.pipe';


@NgModule({
  declarations: [
    Route6Component,
    Range
  ],
  imports: [
    SharedModule,
    Route6RoutingModule
  ]
})
export class Route6Module { }
