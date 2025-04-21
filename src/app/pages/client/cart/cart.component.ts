import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../../../services/apis/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    CommonModule,
  ]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe({
      next: (res) => {
        this.cartItems = res;
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe({
      next: () => {
        this.getCartItems();  // Cập nhật lại giỏ hàng
      },
      error: (err) => {
        console.error('Error removing product from cart:', err);
      }
    });
  }
}
