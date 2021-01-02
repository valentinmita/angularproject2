import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../../environments/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any[] | undefined;
  $index: any;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  deleteItem(e: any) {
    this.cartService.deleteItemCart(e);
  }
  get total() {
    return this.cartService.totalSumCart();
  }
}
