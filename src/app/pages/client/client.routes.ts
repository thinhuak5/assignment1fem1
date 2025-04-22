import {Routes} from '@angular/router';
import {SideHomeComponent} from './side-home/side-home.component';
import {ProductComponent} from './product/product.component';
import {AppSideLoginComponent} from "../authentication/side-login/side-login.component";
import {AppSideRegisterComponent} from "../authentication/side-register/side-register.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProductDetailComponent} from './product/detail/detail.component';
import {CartComponent} from "./cart/cart.component";
import {OrderComponent} from "./order/order.component";


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
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'product/:id', // Định nghĩa route cho chi tiết sản phẩm
        component: ProductDetailComponent, // Component hiển thị chi tiết sản phẩm
      },
      {
        path: 'carts',
        component: CartComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      }
    ],
  },
];
