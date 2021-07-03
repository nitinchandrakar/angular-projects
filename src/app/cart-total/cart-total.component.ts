import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item-card/item.modal';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {

  @Input()
  total:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
