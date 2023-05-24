import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'] 
})
export class Route6Component {

  arrSize = 5;
 
  scrollBox(event: any){
    // console.log(event.getBoundingClientRect().height);
    const target: any = document.getElementById('targetDiv');
    // console.log(target.getBoundingClientRect().top);
    if(target.getBoundingClientRect().top < event.getBoundingClientRect().height){
      this.arrSize += 5;
    }
   
    
  }
  showAlert(event: any){
    alert("Button of "+event.target.value+"th div is clicked!");
  }

}
