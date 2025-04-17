import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from 'src/app/services/apis/user.service';
import {IUser} from 'src/app/interface/user.interface';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MatOption} from '@angular/material/core';
import {CloudinaryService} from 'src/app/services/common/cloudinary.service'; // như bên category

@Component({
  selector: 'app-edit-user',
  standalone: true,
  templateUrl: './edit.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatLabel,
    MatOption
  ]
})
export class EditUserComponent implements OnInit {
  form!: FormGroup;
  userId!: number;
  isEditMode = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private cloudinary: CloudinaryService // giống category
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      avatar: [''], // base64 hoặc url từ cloudinary
      status: [1, Validators.required],
      role: [2, Validators.required]
    });

    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(id: number): void {
    this.userService.getUserById(id).subscribe(user => {
      this.form.patchValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        status: user.status,
        role: user.role
      });
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.form.get('avatar')?.setValue(res.secure_url); // gán URL vào form
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedUser: IUser = this.form.value;
      this.userService.updateUser(this.userId, updatedUser).subscribe({
        next: () => {
          this.snackBar.open('Cập nhật thành công!', '', {duration: 2000});
          this.router.navigate(['/ui-components/user']);
        },
        error: err => {
          console.error('Cập nhật thất bại:', err);
          this.snackBar.open('Cập nhật thất bại!', '', {duration: 2000});
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/ui-components/user']);
  }
}
