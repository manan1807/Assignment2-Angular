import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ITimer } from "./timer.interface";

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    counterValue = new Subject<ITimer>();
}