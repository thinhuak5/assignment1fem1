import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

// Giả định dữ liệu đơn hàng được truyền vào (có thể từ service hoặc route params)
export interface OrderData {
  id: number;
  imagePath: string;
  name: string;
  quantity: number;
  price: number;
  status: string;
}

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './edit-order.component.html',
})
export class EditOrderComponent implements OnInit {
  order: OrderData = {
    id: 0,
    imagePath: '',
    name: '',
    quantity: 0,
    price: 0,
    status: '',
  };

  statuses = ['Đã giao', 'Đang xử lý', 'Đã hủy']; // Danh sách trạng thái

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Giả lập dữ liệu đơn hàng cần sửa (thực tế sẽ lấy từ service hoặc route params)
    this.order = {
      id: 1,
      imagePath: 'assets/images/orders/order1.jpg',
      name: 'Pháp sư tiễn táng - Tập 12',
      quantity: 2,
      price: 15,
      status: 'Đã giao',
    };
  }

  saveOrder() {
    // Logic lưu đơn hàng (gửi dữ liệu đến service hoặc backend)
    console.log('Đơn hàng đã được cập nhật:', this.order);
    this.router.navigate(['/ui-components/orders']); // Quay lại danh sách đơn hàng
  }

  cancel() {
    this.router.navigate(['/ui-components/orders']); // Quay lại mà không lưu
  }
}
