import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route3comp4',
  templateUrl: './route3comp4.component.html',
  styleUrls: ['./route3comp4.component.css']
})
export class Route3comp4Component {

 @Input() clicksCountArray:any = {startedCount: 0, oausedCount: 0};
}
