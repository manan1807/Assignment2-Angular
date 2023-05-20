import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route3comp3',
  templateUrl: './route3comp3.component.html',
  styleUrls: ['./route3comp3.component.css']
})
export class Route3comp3Component {

 @Input() timeStamp :any[]= [];

}
