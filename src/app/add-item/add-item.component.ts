import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Item } from '../item';
import { SharerService } from '../sharer.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
@Input() data:Item;
@Output() addToCart=new EventEmitter<any>();
  constructor(private myservice:SharerService) { }
info:Item[]=[];
  ngOnInit(): void {
  }
increaseQty(){
  this.data.qty++;
}
decreaseQty(){
  this.data.qty--;
}
isadded=false;
AddToCart(){
  this.isadded=!this.isadded;
  let payload={
    isadded:this.isadded,
    item:this.data
  }
  this.addToCart.emit(payload)
}

}
