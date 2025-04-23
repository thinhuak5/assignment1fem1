import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../../../services/apis/cart.service';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router';
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
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getCartItems();
  }


  getCartItems() {
    const id = Number(localStorage.getItem('userId'));
    this.cartService.getCartItems(id).subscribe({
      next: (res: any) => {
        this.cartItems = res.items;
        this.calculateTotalPrice();
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });
  }

  updateQuantity(productId: number, newQuantity: number) {
    if (newQuantity < 1) return;
    this.cartService.updateCartItem(productId, {quantity: newQuantity}).subscribe({
      next: () => {
        const item = this.cartItems.find(i => i.product_id === productId);
        if (item) item.quantity = newQuantity;
        this.calculateTotalPrice();
      },
      error: (err) => {
        console.error('Lỗi cập nhật số lượng:', err);
      }
    });
  }

  removeFromCart(productId: number) {
    const confirmed = confirm('Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?');
    if (!confirmed) return;

    this.cartService.removeFromCart(productId).subscribe({
      next: () => {
        this.getCartItems(); // Refresh lại giỏ hàng
      },
      error: (err) => {
        console.error('Lỗi khi xoá sản phẩm khỏi giỏ hàng:', err);
      }
    });
  }


  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
