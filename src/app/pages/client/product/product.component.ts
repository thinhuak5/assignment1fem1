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
// product.component.ts
  addToCart(productId: number) {
    const quantity = 1; // Hoặc lấy giá trị quantity từ đâu đó nếu muốn
    const userId = 1; // Lấy user_id từ session hoặc từ thông tin người dùng
    const price = 100; // Lấy giá từ sản phẩm hoặc từ thông tin liên quan

    this.cartService.addToCart(productId, quantity, userId, price).subscribe({
      next: () => {
        this.router.navigate(['/cart']);
      },
      error: (err: any) => {
        console.error('Lỗi khi thêm sản phẩm vào giỏ:', err);
      }
    });
  }



}
