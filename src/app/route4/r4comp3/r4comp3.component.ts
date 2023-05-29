import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ITimer } from '../timer.interface';

@Component({
  selector: 'app-r4comp3',
  templateUrl: './r4comp3.component.html',
  styleUrls: ['./r4comp3.component.css']
})
export class R4comp3Component {

  timerTimeStamp: any[] = [];
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.counterValue.subscribe(res =>

      this.setTimerTimeStamp(res)
    );
  }
  setTimerTimeStamp(res: ITimer): void {

    switch (res.buttonState) {
      case 'start':
        this.timerTimeStamp.push({ 'text': 'startedAt: ', 'timestamp': new Date().toLocaleString() })
        break;
      case 'resume':
        this.timerTimeStamp.push({ 'text': 'startedAt: ', 'timestamp': new Date().toLocaleString() })
        break;
      case 'pause':
        this.timerTimeStamp.push({ 'text': 'pausedAt: ', 'timestamp': new Date().toLocaleString() })
        break;
      case 'reset':
        this.timerTimeStamp = [];
        break;
      default:
        break;
    }

  }

}
