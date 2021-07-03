import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item-card/item.modal';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {

  @Input()
  products:Array<Item> =[]
  constructor() { }

  ngOnInit(): void {
  }

}
