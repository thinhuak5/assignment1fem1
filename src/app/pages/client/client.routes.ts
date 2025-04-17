import {Routes} from '@angular/router';
import {SideHomeComponent} from './side-home/side-home.component';
import {ProductComponent} from './product/product.component';
export const ClientRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: SideHomeComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];
