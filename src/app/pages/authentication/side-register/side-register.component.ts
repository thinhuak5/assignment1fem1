import {Component} from '@angular/core';
import {CoreService} from 'src/app/services/core.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CloudinaryService} from "../../../services/common/cloudinary.service";

@Component({
  selector: 'app-side-register',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,

  ],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]),
    avatar: new FormControl('', [Validators.required]) // Trường avatar
  });

  constructor(private settings: CoreService,
              private router: Router,
              private cloudinary: CloudinaryService) {
  }

  get f() {
    return this.form.controls;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.form.get('avatar')?.setValue(res.secure_url); // gán URL vào form
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log("Form không hợp lệ");
      return;
    }
    console.log("Form hợp lệ, đang gửi dữ liệu...");


    // Gửi thông tin đăng ký
    const {username, name, email, password, phone} = this.form.value;
    this.settings.registerUser(this.form.value).subscribe({
      next: (res) => {
        alert('Đăng ký thành công!');
        this.router.navigate(['/authentication/login']);
      },
      error: (err) => {
        console.error('Lỗi khi đăng ký: ', err);
        alert('Đăng ký thất bại! Vui lòng thử lại.');
      },
    });
  }


}

