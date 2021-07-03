import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item-card/item.modal';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/service.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  @Input()
  cartItems: any;

  currencyList!: Array<any>;

  totalAmount!: number;

  myform!: FormGroup;
  userName!: FormControl;
  email!: FormControl;
  currency!: FormControl;

  selectedCurr!: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllCurrency().subscribe((res) => {
      this.currencyList = res['results'];
    });

    this.selectedCurr = 'USD';
    this.totalAmount = this.cartItems.total;
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
    ]);

    this.currency = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      userName: this.userName,
      email: this.email,
      currency: this.currency,
    });
  }

  convertCurrency() {
    this.productService
      .convertCurrency(this.cartItems.total, 'USD', this.selectedCurr)
      .subscribe((res) => {
        const fromCurrency = encodeURIComponent('USD');
        const toCurrency = encodeURIComponent(this.selectedCurr);

        const query = fromCurrency + '_' + toCurrency;
        this.totalAmount = res[query] * this.cartItems.total;
        this.totalAmount = Math.round(this.totalAmount * 100) / 100;
      });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!', this.myform);
      this.cartService.completeOrder({
        ...this.myform.value,
        products: this.cartItems,
      });
      this.myform.reset();
      this.router.navigateByUrl('/success')
    }
  }
}
