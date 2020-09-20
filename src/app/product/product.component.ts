import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { SharerService } from '../sharer.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router }from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private myservice: SharerService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {

  }
  product: Item[] = [
    { name: "iphone", qty: 1, price: 1000 },
    { name: "samsung", qty: 2, price: 10000 },
    { name: "lava", qty: 2, price: 50000 }
  ];
  cart: Item[] = [];
  addtocart(event) {
    console.log(event)

    if (event.response) {
      this.cart.push(event.product)
      console.log(this.cart)
    }
    else {
      this.cart = this.cart.filter(item =>
        item !== event.product
      )
      console.log(this.cart)

    }
  }
  total: number;
  calculate() {
    this.total = 0;
    this.cart.forEach(item => {
      this.total = this.total + item.qty * item.price;
    })
    return this.total;
  }
  addarray() {
    // var get = this.myservice.showItem();
  }
}
