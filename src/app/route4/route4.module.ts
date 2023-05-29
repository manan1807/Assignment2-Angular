import { NgModule } from '@angular/core';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { SharedModule } from '../shared.module';
import { R4comp1Component } from './r4comp1/r4comp1.component';
import { R4comp2Component } from './r4comp2/r4comp2.component';
import { R4comp3Component } from './r4comp3/r4comp3.component';
import { R4comp4Component } from './r4comp4/r4comp4.component';


@NgModule({
  declarations: [
    Route4Component,
    R4comp1Component,
    R4comp2Component,
    R4comp3Component,
    R4comp4Component
  ],
  imports: [
    SharedModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
