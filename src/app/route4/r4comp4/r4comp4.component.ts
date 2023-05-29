import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ITimer } from '../timer.interface';

@Component({
  selector: 'app-r4comp4',
  templateUrl: './r4comp4.component.html',
  styleUrls: ['./r4comp4.component.css']
})
export class R4comp4Component {

  startCount: number = 0;
  pausedCount: number = 0;
  constructor(private _sharedServices: SharedService) {
    this._sharedServices.counterValue.subscribe(
      res => this.printStartPauseCount(res)
    );
  }
  printStartPauseCount(res: ITimer): void {

    switch (res.buttonState) {
      case 'start':
        this.startCount++;
        break;
      case 'resume':
        this.startCount++;
        break;
      case 'pause':
        this.pausedCount++;
        break;
      case 'reset':
        this.startCount = 0;
        this.pausedCount = 0;
        break;

      default:
        break;
    }

  }

}
