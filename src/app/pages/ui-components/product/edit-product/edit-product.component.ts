import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {ProductsService} from 'src/app/services/apis/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  productId: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Khởi tạo form
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount_price: [0, [Validators.min(0)]],
      status: [1, Validators.required],
      description: [''], // Mô tả
      category_id: [null, Validators.required], // Mã danh mục
    });
  }

  ngOnInit(): void {
    // Lấy ID sản phẩm từ URL (có thể dùng để tải dữ liệu sản phẩm cần sửa)
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    // Lấy dữ liệu sản phẩm từ service và điền vào form
    if (this.productId) {
      this.productService.getProducts().subscribe((products) => {
        const product = products.find(p => p.id === this.productId);
        if (product) {
          this.form.patchValue(product); // Điền giá trị vào form
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    // Cập nhật sản phẩm
    this.productService.updateProducts(this.productId, this.form.value).subscribe({
      next: () => {
        alert('Cập nhật sản phẩm thành công!');
        this.router.navigate(['/ui-components/products']); // Điều hướng về trang danh sách sản phẩm
      },
      error: (err) => {
        console.error('Cập nhật sản phẩm thất bại:', err);
        if (err.status === 500) {
          alert('Lỗi server: Không thể cập nhật sản phẩm. Vui lòng thử lại sau.');
        } else {
          alert('Đã xảy ra lỗi khi cập nhật sản phẩm.');
        }
      },
    });
  }
}
