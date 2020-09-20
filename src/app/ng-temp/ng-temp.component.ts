import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-ng-temp',
  templateUrl: './ng-temp.component.html',
  styleUrls: ['./ng-temp.component.css']
})
export class NgTempComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  store: Item[] = [
    {
      name: "iphone",
      qty: 2,
      price: 10000
    },
    {
      name: "samsung",
      qty: 3,
      price: 5000
    },
    {
      name: "Motorola",
      qty: 4,
      price: 2000
    }
  ]
  cart: Item[] = [];
  cnt=0;
  addToCart(payload) {
    console.log(payload);

    if (payload.isadded) {
      this.cnt++;
      this.cart.push(payload.item)
    }
    else {
      this.cart = this.cart.filter(param =>
        param !== payload.item
      )
      this.cnt--;
    }
  }
  calculte(){
    let total=0;
    this.cart.forEach(item=>{
      total=total+item.qty*item.price
    })
    return total;
  }
}
