import { NgModule } from '@angular/core';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    SharedModule,
    Route5RoutingModule
  ]
})
export class Route5Module { }
