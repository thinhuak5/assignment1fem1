import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../../services/apis/auth.service';
import {IAlertMessage} from '../../../interface/alert-message.interface';
import {AlertShowcaseComponent} from '../../../common/alert.component';
import {MaterialModule} from 'src/app/material.module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AlertShowcaseComponent,
    CommonModule
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  formData!: FormGroup;
  alertMessages: IAlertMessage[] = [];

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  handleLogin(): void {
    if (this.formData.valid) {
      this.auth.login(this.formData.value).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.token ?? '');
          this.router.navigate(['/']).then();
        },
        error: () => {
          this.alertMessages = [
            {status: 'danger', message: 'Tài khoản hoặc mật khẩu không chính xác á'}
          ];
        }
      });
    }
  }

  get email() {
    return this.formData.get('email');
  }

  get password() {
    return this.formData.get('password');
  }
}
