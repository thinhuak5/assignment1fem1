import {Routes} from '@angular/router';
import {SideHomeComponent} from './side-home/side-home.component';
import {ProductComponent} from './product/product.component';
import {AppSideLoginComponent} from "../authentication/side-login/side-login.component";
import {AppSideRegisterComponent} from "../authentication/side-register/side-register.component";

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
    ],
  },
];
