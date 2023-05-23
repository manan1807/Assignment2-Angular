import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';

const appRoutes: Routes = [
  { path: 'route1', component: Route1Component },
  { path: 'route2', loadChildren: () => import('./route2/route2.module').then(m => m.Route2Module) },
  { path: 'route3', loadChildren: () => import('./route3/route3.module').then(m => m.Route3Module) },
  { path: 'routes6', loadChildren: () => import('./route6/route6.module').then(m => m.Route6Module) },
  { path: 'routes4', loadChildren: () => import('./route4/route4.module').then(m => m.Route4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
