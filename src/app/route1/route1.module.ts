import { NgModule } from '@angular/core';

import { Route1RoutingModule } from './route1-routing.module';
import { Route1Component } from './route1.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    SharedModule,
    Route1RoutingModule
  ]
})
export class Route1Module { }
