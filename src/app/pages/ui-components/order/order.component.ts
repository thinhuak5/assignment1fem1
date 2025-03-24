import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

// Định nghĩa interface cho dữ liệu đơn hàng
export interface OrderData {
  id: number;
  imagePath: string;
  name: string;
  quantity: number;
  price: number;
  status: string;
}

// Dữ liệu mẫu cho đơn hàng
const ORDER_DATA: OrderData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/phapsutientang-tap12.jpg',
    name: 'Pháp sư tiễn táng - Tập 12',
    quantity: 2,
    price: 15,
    status: 'Đã giao',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/WindBreaker-tap2.jpg',
    name: 'Wind Breaker - Tập 2',
    quantity: 1,
    price: 8,
    status: 'Đang xử lý',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/attackontitan-tap9.jpg',
    name: 'Attack On Titan - Tập 9',
    quantity: 3,
    price: 25,
    status: 'Đã hủy',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/nghethuatdamphan.jpg',
    name: 'Nghệ thuật đàm phán',
    quantity: 1,
    price: 20,
    status: 'Đã giao',
  },
];

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './order.component.html',
})
export class AppOrdersComponent {
  displayedColumns: string[] = ['id', 'image', 'name', 'quantity', 'price', 'status', 'actions'];
  dataSource = ORDER_DATA;
}
