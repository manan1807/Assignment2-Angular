import { NgModule } from '@angular/core';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    Route4Component
  ],
  imports: [
    SharedModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
