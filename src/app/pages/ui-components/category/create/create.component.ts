import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CategoryService} from 'src/app/services/apis/category.service';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CloudinaryService} from "../../../../services/common/cloudinary.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-category',
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
  templateUrl: './create.component.html',
})
export class AddCategoryComponent {
  form: FormGroup;

  // @ts-ignore
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private cloudinary: CloudinaryService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: ['', Validators.required],
      status: [1, Validators.required]
    });
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

    this.categoryService.createCategory(this.form.value).subscribe({
      next: () => {
        alert('Thêm danh mục thành công!');
        this.router.navigate(['/ui-components/category']);
      },
      error: (err) => {
        console.error('Thêm danh mục thất bại:', err);
        alert('Đã xảy ra lỗi khi thêm danh mục.');
      }
    });
  }

}
