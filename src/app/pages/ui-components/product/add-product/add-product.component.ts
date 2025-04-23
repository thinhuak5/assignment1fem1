import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from 'src/app/services/apis/product.service';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CloudinaryService} from '../../../../services/common/cloudinary.service';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  form: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public router: Router,
    private cloudinary: CloudinaryService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discount_price: ['', [Validators.min(0)]],
      status: ['', Validators.required],
      description: [''],
      short_description: [''],
      category_id: [null, Validators.required],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      this.isLoading = true;
      this.cloudinary.uploadImage(file).subscribe({
        next: (res: any) => {
          this.form.get('images')?.setValue(res.secure_url);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Lỗi khi tải hình ảnh:', err);
          alert('Lỗi khi tải hình ảnh lên Cloudinary.');
          this.isLoading = false;
        }
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.productService.createProducts(this.form.value).subscribe({
      next: () => {
        alert('Thêm sản phẩm thành công!');
        this.isLoading = false;
        this.router.navigate(['/ui-components/products']);
      },
      error: (err) => {
        console.error('Thêm sản phẩm thất bại:', err);
        this.isLoading = false;
        if (err.status === 500) {
          alert('Lỗi server: Không thể thêm sản phẩm. Vui lòng thử lại sau.');
        } else {
          alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        }
      },
    });
  }
}
