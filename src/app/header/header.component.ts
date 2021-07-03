import { Component, OnInit } from '@angular/core';
import { Item } from '../item-card/item.modal';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    
  }

  getTotalCartCount(items: Array<Item>) {
    let count = 0;
    items.map((item: Item) => {
      count += item.totalCartItems;
    });
    return count==0?'':count;
  }
}
