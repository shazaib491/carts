import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('store') data:Item[];
@Output() addtoCart=new  EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
incQty(){
  this.data.qty++;
}
decQty(){
  this.data.qty--;
}

isadded=false;
Addtocart(){
  this.isadded=!this.isadded;
  let order=this.isadded;
  let payload={
    response:order,
    cart:this.data
  }
  //emite with the help output decorator
  this.addtoCart.emit(payload);
}
}
