import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-route3comp2',
  templateUrl: './route3comp2.component.html',
  styleUrls: ['./route3comp2.component.css']
})
export class Route3comp2Component {

  @Output() timerValue = new EventEmitter();

  count = 0;
  buttonName = 'start';
  counterValue: any = 1000;
  counterObj: any = { counter: 0, isPaused: true, state:'start' };
  timeButtonClicked() {
    this.counterObj.counter = this.counterValue;
    this.count++;
    console.log("Timer Vaue: " + this.counterValue);
    if (this.count % 2 != 0) {
      if(this.buttonName == 'resume'){
        this.counterObj.counter = '';
        this.counterObj.state = 'resume';
      }
      this.buttonName = 'pause';
      this.counterObj.isPaused = false;
      this.timerValue.emit(this.counterObj);
    }

    else {
      this.buttonName = 'resume';
      this.counterObj.isPaused = true;
      this.counterObj.counter = null;
      this.counterObj.state = 'pause';
      this.timerValue.emit(this.counterObj);
    }
  }

  ResetTimer() {
    this.buttonName = 'start';
    this.counterObj.counter = this.counterValue; 
    this.counterObj.isPaused = true;
    this.counterObj.state = 'reset';
    this.timerValue.emit(this.counterObj);
  }

}
