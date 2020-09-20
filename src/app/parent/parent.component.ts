import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.shop)
  }
  shop: Item[] = [
    {
      name:"iphone",
      qty:1,
      price:100000
    },
    {
      name:"samsung",
      qty:2,
      price:15000
    },
    {
      name:"Motorola",
      qty:3,
      price:80000
    }

  ]
  cart:Item[]=[];
  cnt=0;
  cartDetail(payload){
    console.log(payload);
    if(payload.response){
      this.cart.push(payload.cart)
      this.cnt++;
    }
    else
    {
      this.cart=this.cart.filter(item=>{
        item!==payload.cart
      })
      this.cnt--;
    }
  }

  calculate(){
    let total=0;
    this.cart.forEach(item=>{
      total=total+item.qty*item.price
    })
    return total;
  }
}
