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
import {CloudinaryService} from 'src/app/services/common/cloudinary.service';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component"; // như bên category

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
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
    HeaderComponent,
    FooterComponent
  ]
})
export class ProfileComponent implements OnInit {
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
      avatar: ['']
    });

    this.route.params.subscribe(params => {
      const routeId = params['id'];

      // Nếu không có id từ route, thử lấy từ localStorage
      this.userId = routeId && !isNaN(+routeId)
        ? +routeId
        : +(localStorage.getItem('userId') || '0');

      if (this.userId && !isNaN(this.userId)) {
        this.loadUser(this.userId);
      } else {
        this.snackBar.open('Không tìm thấy người dùng!', '', {duration: 2000});
        this.router.navigate(['/home']);
      }
    });
  }


  loadUser(id: number): void {
    this.userService.getUserById(id).subscribe(user => {
      this.form.patchValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar
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
          this.router.navigate(['/home']);
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
