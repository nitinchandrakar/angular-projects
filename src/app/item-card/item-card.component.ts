import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from './item.modal';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()
  data!:Item;

  @ViewChild('quantity')
  quantity!:ElementRef;

  @Input()
  isCheckout:boolean =false;

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
  }

  addRemove(counter:number){
    const controls = this.quantity.nativeElement;
    if(counter==-1){
      if(controls.value>0){
        this.cartService.removeProduct(this.data)
        controls.stepDown();
      }
    }else{
      if(controls.value<this.data.max){
        this.cartService.addProduct(this.data)
        controls.stepUp();
      }
    }
  }
}
