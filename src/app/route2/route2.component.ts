import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component {

  cardArraySize = 40;
  cardGridView: boolean = true;
  cardListView: boolean = false;
  widthRem: number = 18;
  data: any= [];
  selectedPrice: any;

  constructor(private http: HttpClient) { }
  gridViewButtonClicked() {
    this.cardGridView = true;
    this.cardListView = false;
  }
  listViewButtonClicked() {
    this.cardListView = true;
    this.cardGridView = false;
    // this.widthRem = 38;
  }

  ngOnInit() {
    this.http.get("/assets/data.json")
      .subscribe((res : any) => this.data = res);
  }

  getPriceOrder(priceStrategy : any){
    this.selectedPrice = priceStrategy.target.value;
    this.selectedPrice == "lowestFirst" ? this.setPriceOrderAsc() : this.setPriceOrderDesc();
  }

  setPriceOrderAsc(){
    // console.log(this.data);
    // console.log(Object.keys(this.data[0]));
    this.data.sort((a: any,b: any) => {
      return a.price - b.price;
    })
  }
  setPriceOrderDesc(){
    this.data.sort((a: any,b: any) => {
      return b.price - a.price;
    })
  }
}
