import { NgModule } from "@angular/core";
import { Route3Comp1 } from "./comp1/route3comp1.component";
import { Route3Component } from "./route3.component";
import { Route3comp2Component } from "./route3comp2/route3comp2.component";
import { Route3comp3Component } from "./route3comp3/route3comp3.component";
import { Route3comp4Component } from "./route3comp4/route3comp4.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";


@NgModule({
    declarations: [ 
        Route3Component,
        Route3Comp1,
        Route3comp2Component,
        Route3comp3Component,
        Route3comp4Component,
    ],
    imports: [
        FormsModule, SharedModule, RouterModule.forChild([  {path: '', component: Route3Component}])
    ],
    exports: [
    ]
})
export class Route3Module{

}