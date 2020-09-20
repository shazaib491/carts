import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent implements OnInit {
  @Input('data') items: Item;
  @Output() product=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  setqty() {
    this.items.qty++
  }
  decqty() {
    this.items.qty--;
  }
  isadd = false;
  addtocart(payload) {
    this.isadd =!this.isadd;
    let order=this.isadd;
      payload={
        response:order,
        product:payload
    }
      this.product.emit(payload)
    }
  }
