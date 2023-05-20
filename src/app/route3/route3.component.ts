import { Component } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component {
  timerCount: any;
  startedAt: any;
  pausedAt: any;
  timeStampArr: any[] = [];
  t: any;
  countStartpausedclicks: any = { startedCount: 0, pausedCount: 0 };
  timerValuePublishToChildComp1(valueObj: any) {

    if (valueObj.counter) {
      this.timerCount = valueObj.counter;
    }

    switch(valueObj.state) {
      case 'reset':
          {
            this.clearIntervals();
            this.timeStampArr = [];
            this.countStartpausedclicks.startedCount = 0;
            this.countStartpausedclicks.pausedCount = 0;
            return;
          }
        break;
      case 'start':
      case 'resume':  
          {
            this.startedAt = new Date().toLocaleString();
            this.timeStampArr.push({ text: "Started at:", date: this.startedAt });
            this.countStartpausedclicks.startedCount++;
          }
        break;
      case 'pause':
          {
            this.pausedAt = new Date().toLocaleString();
            this.timeStampArr.push({ text: "Paused at:", date: this.pausedAt });
            this.countStartpausedclicks.pausedCount++;
          } 
        break; 
      default:
        console.log("Switch case Ends here");
    }

    this.clearIntervals();
    console.log("creating a new interval");
    this.t = setInterval(() => {
      if (!valueObj.isPaused && this.timerCount > 0) {
            this.timerCount--;
      }
      else if (valueObj.isPaused || this.timerCount == 0) {
        console.log(this.timerCount);
        this.clearIntervals();
      }
    }, 1000);
  }

  clearIntervals() {
    clearInterval(this.t);
  }
}
