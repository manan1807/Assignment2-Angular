import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ITimer } from '../timer.interface';

@Component({
  selector: 'app-r4comp1',
  templateUrl: './r4comp1.component.html',
  styleUrls: ['./r4comp1.component.css']
})
export class R4comp1Component {
  countervalue!: number;
  timerInterval: any;

  constructor(private _sharedService: SharedService){
    this._sharedService.counterValue.subscribe(
      res => {
        // this.countervalue = res.value;
        this.handleTimerState(res);
      }
    );
  }


 handleTimerState(res: ITimer) {
  console.log(res);
  switch (res.buttonState) {
    case 'start':
      this.countervalue = res.value;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        console.log(this.countervalue);
        this.countervalue--;
      }, 1000);
      break;
    case 'resume':
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        console.log(this.countervalue);
        this.countervalue--;
      }, 1000);
      break;
      case 'pause':
        clearInterval(this.timerInterval);
      break;
    case 'reset':
        clearInterval(this.timerInterval);
        this.countervalue = res.value;
      break;
    default:
      break;
  }
}
}
