import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from 'src/app/services/apis/product.service';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CloudinaryService} from '../../../../services/common/cloudinary.service';
import {CommonModule} from '@angular/common';
import {IProduct} from 'src/app/interface/product.interface';

@Component({
  selector: 'app-edit-product',
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
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  productId: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public router: Router,
    private cloudinary: CloudinaryService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount_price: [0, [Validators.min(0)]],
      status: [1, Validators.required],
      description: [''],
      category_id: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productId) {
      this.productService.getProductById(Number(this.productId)).subscribe(
        (product: IProduct) => {
          this.form.patchValue({
            name: product.name,
            images: product.images,
            price: product.price,
            discount_price: product.discount_price,
            status: product.status,
            description: product.description,
            category_id: product.category_id
          });
        },
        (error) => {
          console.error('Lỗi khi lấy sản phẩm:', error);
          alert('Không tìm thấy sản phẩm!');
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.form.get('images')?.setValue(res.secure_url);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const id = Number(this.productId);

    if (this.productId) {
      this.productService.updateProducts(id, this.form.value).subscribe({
        next: () => {
          alert('Cập nhật sản phẩm thành công!');
          this.router.navigate(['/ui-components/products']);
        },
        error: (err) => {
          console.error('Cập nhật sản phẩm thất bại:', err);
          alert('Đã xảy ra lỗi khi cập nhật sản phẩm.');
        },
      });
    } else {
      this.productService.createProducts(this.form.value).subscribe({
        next: () => {
          alert('Thêm sản phẩm thành công!');
          this.router.navigate(['/ui-components/products']);
        },
        error: (err) => {
          console.error('Thêm sản phẩm thất bại:', err);
          alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        },
      });
    }
  }
}