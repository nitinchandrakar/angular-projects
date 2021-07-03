import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../item-card/item.modal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private subject = new BehaviorSubject<any>(null);

  public cartTotal:number = 0;

  cartObs$:Observable<any> = this.subject.asObservable();

  private cartItems: Array<Item> = [];
  constructor() {

  }

  getTotal(){
    let total = 0;

    this.cartItems.map((product:Item)=>{
      total = total +  (product.price * product.totalCartItems);
    })

    return total ;
  }

  addProduct(item: Item) {
    const index = this.cartItems.findIndex((value) => value.id === item.id);
    if (index > -1) {
      this.cartItems[index].totalCartItems++;
    }else{
      item.totalCartItems++;
      this.cartItems.push(item);
    }

    this.cartTotal = this.getTotal();
    this.subject.next({cartItems:this.cartItems, total:this.cartTotal});
    console.log('add products===>', this.cartItems);
  }

  removeProduct(item: Item) {
    const index = this.cartItems.findIndex((value) => value.id === item.id);
    if (index > -1) {
      this.cartItems[index].totalCartItems--;

      if(this.cartItems[index].totalCartItems==0){
        this.cartItems.splice(index,1)
      }
    }

    this.cartTotal = this.getTotal();
    this.subject.next({cartItems:this.cartItems, total:this.cartTotal});
  }

  getCartItems(){
    this.cartTotal = this.getTotal();
    this.subject.next({cartItems:this.cartItems, total:this.cartTotal});
  }

  completeOrder(params:any){
    this.cartItems = [];
    this.cartTotal = 0;
    this.subject.next({cartItems:this.cartItems, total:this.cartTotal});
  }
}
