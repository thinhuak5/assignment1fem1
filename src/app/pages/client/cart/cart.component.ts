import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../../../services/apis/cart.service';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router'; // 👈 Import cần thiết cho routerLink
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule

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
