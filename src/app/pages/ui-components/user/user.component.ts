import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';


export interface UserData {
  id: number;
  imagePath: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

const USER_DATA: UserData[] = [
  {
    id: 1,
    imagePath: 'https://jbagy.me/wp-content/uploads/2025/03/hinh-anh-cute-avatar-vo-tri-1.jpg',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0987654321',
    address: 'Hà Nội, Việt Nam',
    password: '********'
  },
  {
    id: 2,
    imagePath: 'https://hinhnendep.pics/wp-content/uploads/2024/11/avatar-vo-tri-cute-moi-nhat-1.jpg',
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    phone: '0912345678',
    address: 'TP. Hồ Chí Minh, Việt Nam',
    password: '********'
  }
];

@Component({
  selector: 'app-user',
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
})
export class UserComponent {
  displayedColumns1: string[] = ['image', 'name', 'email', 'phone', 'address', 'password', 'actions'];
  dataSource1 = [...USER_DATA];
}
