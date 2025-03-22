import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

export interface Product {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  isEditing?: boolean; // Thêm thuộc tính kiểm tra trạng thái sửa
}

const randomComments = [
  'Sản phaam nhu cai cc, đáng tin cậy.',
  'Mang lại trải nghiệm tuyệt vời.',
  'Thiết kế tinh tế, chất lượng cao.',
  'Sự lựa chọn hoàn hảo cho bạn.',
  'Sản phẩm mang lại sự thoải mái.',
  'Đẹp mắt và sang trọng.',
  'Thiết kế tối giản nhưng hiệu quả.',
  'Mang đến sự linh hoạt tối đa.',
  'Độ bền cao, không lo hỏng hóc.',
  'Tỏa sáng theo cách riêng của bạn.',
  'Cmt síc rịt.',
];

const PRODUCT_DATA: Product[] = [
  {
    position: 1,
    name: 'Anh Hùng',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 2,
    name: 'Bình Minh',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 3,
    name: 'Chí Thành',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 4,
    name: 'Nguyễn Vỹ',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 5,
    name: 'Thành Thịnh',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 6,
    name: 'Đức Huy',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 7,
    name: 'Hòa Bình',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 8,
    name: 'Khá Bank',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 9,
    name: 'Hải Bánh',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
  {
    position: 10,
    name: 'Năm Cam',
    weight: randomComments[Math.floor(Math.random() * randomComments.length)],
    symbol: Math.random() > 0.5 ? 'Ẩn' : 'Hiện'
  },
];

@Component({
  selector: 'app-comment',
  imports: [CommonModule, FormsModule, MatTableModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = [...PRODUCT_DATA];

  toggleEdit(element: Product) {
    element.isEditing = !element.isEditing;
  }

  deleteElement(element: Product) {
    this.dataSource = this.dataSource.filter(item => item !== element);
  }
}
