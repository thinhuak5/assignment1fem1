import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router'; // To fetch product ID from the URL
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from 'src/app/services/apis/product.service';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CloudinaryService} from '../../../../services/common/cloudinary.service'; // Service for image upload
import {CommonModule} from '@angular/common';
import {IProduct} from 'src/app/interface/product.interface'; // Import the Product interface

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
  productId: string; // Store the ID of the product being edited

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService, // Product service
    public router: Router,
    private cloudinary: CloudinaryService, // Cloudinary service for image upload
    private route: ActivatedRoute // To access route params (product ID)
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
    // Get product ID from the route
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productId) {
      // If a product ID exists, fetch the product details
      this.productService['getProductsById'](this.productId).subscribe(
        (product: IProduct) => {
          // Fill the form with the existing product data
          this.form.patchValue({
            name: product.name,
            images: product.images,
            price: product.price,
            discount_price: product.discount_price,
            status: product.status,
            description: product.description,
            category_id: product.category_id
          });
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Upload image to Cloudinary
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.form.get('images')?.setValue(res.secure_url); // Update form with image URL
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const id = Number(this.productId); // Chuyển đổi productId thành number

    if (this.productId) {
      // If productId exists, update the existing product
      this.productService.updateProducts(id, this.form.value).subscribe({
        next: () => {
          alert('Cập nhật sản phẩm thành công!');
          this.router.navigate(['/ui-components/products']); // Redirect to product list
        },
        error: (err) => {
          console.error('Cập nhật sản phẩm thất bại:', err);
          alert('Đã xảy ra lỗi khi cập nhật sản phẩm.');
        },
      });
    } else {
      // If productId does not exist, create a new product
      this.productService.createProducts(this.form.value).subscribe({
        next: () => {
          alert('Thêm sản phẩm thành công!');
          this.router.navigate(['/ui-components/products']); // Redirect to product list
        },
        error: (err) => {
          console.error('Thêm sản phẩm thất bại:', err);
          alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        },
      });
    }
  }
}
