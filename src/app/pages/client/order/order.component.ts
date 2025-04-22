import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent

  ]
})
export class OrderComponent {

  cartItems = [
    {
      name: 'Sữa Tươi Vinamilk',
      image: 'https://cdn.example.com/sua-vinamilk.jpg',
      quantity: 2,
      price: 30000,
      total: 60000
    },
    {
      name: 'Bánh Oreo Socola',
      image: 'https://cdn.example.com/oreo.jpg',
      quantity: 1,
      price: 15000,
      total: 15000
    },
    {
      name: 'Mì Hảo Hảo',
      image: 'https://cdn.example.com/haohao.jpg',
      quantity: 5,
      price: 4000,
      total: 20000
    }
  ];

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }

}
