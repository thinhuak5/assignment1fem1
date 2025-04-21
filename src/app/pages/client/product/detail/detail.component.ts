import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IProduct} from '../../../../interface/product.interface';
import {ProductsService} from '../../../../services/apis/product.service';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],

  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | null = null;

  constructor(
    private route: ActivatedRoute, // Để lấy tham số từ URL
    private productService: ProductsService // Dịch vụ để gọi API
  ) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', productId); // Kiểm tra xem ID có chính xác không
    if (productId) {
      this.getProductDetail(+productId); // Lấy chi tiết sản phẩm theo ID
    }
  }


  getProductDetail(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        console.error('Error fetching product detail:', err);
      }
    });
  }
}
