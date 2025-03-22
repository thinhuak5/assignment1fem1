import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/phapsutientang-tap12.jpg',
    uname: 'Pháp sư tiễn táng - Tập 12',
    budget: 6,
    priority: 'Thanhh toán đày đủ',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/WindBreaker-tap2.jpg',
    uname: 'Wind Breaker - Tập 2',
    budget: 4,
    priority: 'Đã hủy',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/attackontitan-tap9.jpg',
    uname: 'Attack On Titan - Tập 9',
    budget: 6,
    priority: 'Trả một phần',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/nghethuatdamphan.jpg',
    uname: 'Nghệ thuật đàm phán',
    budget: 10,
    priority: 'Thanhh toán đày đủ',
  },
  {
    id: 5,
    imagePath: 'assets/images/products/lythuyettrochoi.jpg',
    uname: 'Lý thuyết trò chơi',
    budget: 8,
    priority: 'Thanhh toán đày đủ',
  },
];

@Component({
  selector: 'app-tables',
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule
  ],
  templateUrl: './tables.component.html',
})
export class AppTablesComponent {
  // table 1
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;
}
