import { Component, Input} from '@angular/core';
@Component({
  selector: 'route3comp1',
  templateUrl: './route3comp1.component.html',
  styleUrls: ['./route3comp1.component.css']
})
export class Route3Comp1 {

@Input() timerValue: any;

}