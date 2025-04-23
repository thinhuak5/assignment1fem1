import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {ProductsService} from '../../../services/apis/product.service';
import {IProduct} from '../../../interface/product.interface';
import {MatDialog} from '@angular/material/dialog';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {CartService} from "../../../services/apis/cart.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: IProduct[] = [];

  // Inject các service
  private dialog = inject(MatDialog);
  private productService = inject(ProductsService);
  private cartService = inject(CartService);
  private router = inject(Router);

  constructor() {
    this.getAll();
  }

  // Lấy danh sách sản phẩm
  getAll() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res?.data ?? res;
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  // Thêm vào giỏ hàng
  addToCart(product: any): void {
    const userId = Number(localStorage.getItem('userId'));
    const quantity = 1;
    const price = product.price;

    this.cartService.addToCart(product.id, quantity, userId, price).subscribe({
      next: (res) => {
        console.log('Đã thêm vào giỏ hàng:', res);
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
        // Hiển thị toast hoặc thông báo nếu muốn
      },
      error: (err) => {
        console.error('Lỗi thêm vào giỏ hàng:', err);
      }
    });
  }


}
