import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CategoryService} from '../../../../services/apis/category.service';
import {ICategory} from '../../../../interface/category.interface';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CloudinaryService} from "../../../../services/common/cloudinary.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit.component.html',
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    RouterLink,
    MatLabel,
    CommonModule,
    MatCardContent,
    MatCard,
    MatInput,
    MatOption,
    MatOption,
    MatOption,
    MatButton
  ]
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  categoryId!: number;
  isEditMode = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private cloudinary: CloudinaryService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      images: [''],
      status: [1, Validators.required]
    });

    this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // ép kiểu về number
      if (this.categoryId) {
        this.loadCategory(this.categoryId);
      }
    });
  }

  loadCategory(id: number): void {
    this.categoryService.getById(id).subscribe(data => {
      this.form.patchValue({
        name: data.name,
        images: data.images,
        status: data.status
      });
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

  onSubmit(): void {
    if (this.form.valid) {
      const updatedCategory: ICategory = this.form.value;
      this.categoryService.updateCategory(this.categoryId, updatedCategory).subscribe({
        next: () => {
          this.router.navigate(['/ui-components/category']);
        },
        error: (err) => {
          console.error('Cập nhật thất bại:', err);
        }
      });
    }
  }
}
