import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from 'src/app/services/apis/product.service';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CloudinaryService} from '../../../../services/common/cloudinary.service'; // Dịch vụ upload hình ảnh
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService, // Sử dụng dịch vụ sản phẩm
    public router: Router,  // Chuyển từ private sang public để sử dụng trong template
    private cloudinary: CloudinaryService // Sử dụng dịch vụ Cloudinary cho việc upload hình ảnh
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount_price: [0, [Validators.min(0)]],
      status: [Validators.required],
      description: [''], // Mô tả sản phẩm
      category_id: [null, Validators.required], // Mã danh mục
    });
  }

  // Đổi tên thành onFileSelected
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Upload hình ảnh lên Cloudinary
      this.cloudinary.uploadImage(file).subscribe({
        next: (res: any) => {
          this.form.get('images')?.setValue(res.secure_url); // Cập nhật URL hình ảnh vào form
        },
        error: (err) => {
          console.error('Lỗi khi tải hình ảnh:', err);
          alert('Lỗi khi tải hình ảnh lên Cloudinary.');
        }
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.productService.createProducts(this.form.value).subscribe({
      next: () => {
        alert('Thêm sản phẩm thành công!');
        this.router.navigate(['/ui-components/products']); // Điều hướng về trang danh sách sản phẩm
      },
      error: (err) => {
        console.error('Thêm sản phẩm thất bại:', err);
        if (err.status === 500) {
          alert('Lỗi server: Không thể thêm sản phẩm. Vui lòng thử lại sau.');
        } else {
          alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        }
      },
    });
  }
}
