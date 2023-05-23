import { NgModule } from "@angular/core";
import { Route2Component } from "./route2.component";
import { SharedModule } from "../shared.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [Route2Component],
    imports:[SharedModule, RouterModule.forChild([{path: '', component: Route2Component}])],
    exports: [Route2Component]
})
export class Route2Module{

}