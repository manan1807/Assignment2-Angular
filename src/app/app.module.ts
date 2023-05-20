import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { RouterModule, Routes } from '@angular/router';
import { Route2Component } from './route2/route2.component';
import { RangepipeDirective } from './rangepipe.directive';
import { RangePipe } from './range.pipe';
import { Route3Component } from './route3/route3.component';
import { Route5Component } from './route5/route5.component';
import { Route3Comp1 } from './route3/comp1/route3comp1.component';
import { Route3comp2Component } from './route3/route3comp2/route3comp2.component';
import { Route3comp3Component } from './route3/route3comp3/route3comp3.component';
import { Route3comp4Component } from './route3/route3comp4/route3comp4.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes= [
{path: 'route1', component: Route1Component},
{path: 'route2', component: Route2Component},
{path: 'route3', component: Route3Component},
{path: 'route5', component: Route5Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    RangepipeDirective,
    RangePipe,
    Route3Component,
    Route5Component,
    Route3Comp1,
    Route3comp2Component,
    Route3comp3Component,
    Route3comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
