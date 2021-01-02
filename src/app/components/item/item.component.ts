import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../../../environments/item';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  item: any;
  addToCart(prova: any) {
    this.cartService.addToCart(prova);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      let routerState = this.router.getCurrentNavigation()?.extras.state;
      if (routerState) {
        this.item = routerState.item ? JSON.parse(routerState.item) : [];
      }
    }
  }

  ngOnInit(): void {
    console.log(this.route);
  }
}
