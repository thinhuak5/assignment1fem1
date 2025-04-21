import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {ProductsService} from '../../../services/apis/product.service'; // Dịch vụ lấy sản phẩm
import {IProduct} from '../../../interface/product.interface'; // Giao diện sản phẩm
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-side-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './side-home.component.html',
  styleUrl: './side-home.component.scss'
})
export class SideHomeComponent {
  products: IProduct[] = [];  // Mảng lưu sản phẩm
  readonly dialog = inject(MatDialog);

  constructor(private productService: ProductsService) {
    this.getAll();
  }

  // Lấy danh sách sản phẩm
  getAll() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res?.data ?? res;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }


}
