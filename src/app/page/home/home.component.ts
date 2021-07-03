import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { itemData } from 'src/app/data/data';
import { Item } from 'src/app/item-card/item.modal';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemList: Array<Item> = [];

  itemListObs$!:Observable<any>;

  constructor(
    public  productService: ProductService
  ) { }

  ngOnInit(): void {
    console.log("on init")
    //this.itemListObs$ = this.service.getItems();

    this.itemList = itemData;
  }

}
