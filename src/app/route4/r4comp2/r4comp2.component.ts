import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-r4comp2',
  templateUrl: './r4comp2.component.html',
  styleUrls: ['./r4comp2.component.css']
})
export class R4comp2Component implements OnInit {

  counterValue: any;
  timerBtnName: string = 'start';
  count: number = 0;
  map: Map<string, string> = new Map<string, string>();
  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
  }
  timerClicked(countervalue: any) {
    this.map = this.getButtonState(this.timerBtnName);
    const timerObj = {
      value: countervalue.value,
      buttonState: this.map.get('buttonstate')
    }
    this._sharedService.counterValue.next(timerObj);
  }
  getButtonState(buttonName: any): Map<string, string> {

    if (buttonName == 'reset')
      this.timerBtnName = 'reset';

    switch (buttonName) {

      case 'start':
        this.map.set('buttonstate', 'start');
        this.timerBtnName = 'pause';
        return this.map;
        break;
      case 'resume':
        this.map.set('buttonstate', 'resume');
        this.timerBtnName = 'pause';
        return this.map;
        break;
      case 'pause':
        this.map.set('buttonstate', 'pause');
        this.timerBtnName = 'resume';
        return this.map;
        break;
      case 'reset':
        this.map.set('buttonstate', 'reset');
        this.timerBtnName = 'start';
        return this.map;
      default:
        return this.map;
        break;

    }

  }

  resetClicked(event: any, value:any){
    this.timerBtnName = event.target.value;
    this.timerClicked(value);  
  }

}
