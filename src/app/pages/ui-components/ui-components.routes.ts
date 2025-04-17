import {Routes} from '@angular/router';


import {AppChipsComponent} from './chips/chips.component';
import {AppListsComponent} from './lists/lists.component';
import {AppFormsComponent} from './forms/forms.component';
import {CategoryComponent} from './category/category.component';
import {EditComponent} from "./category/edit/edit.component";
import {AddCategoryComponent} from './category/create/create.component';
import {UserComponent} from './user/user.component';
import {CommentComponent} from './comment/comment.component'
import {EditUserComponent} from "./user/edit/edit.component";
import {AddProductComponent} from './product/add-product/add-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {AppOrdersComponent} from './order/order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {ProductComponent} from './product/product.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'order',
        component: AppOrdersComponent, // Thêm tuyến đường cho danh sách đơn hàng
      },
      {
        path: 'edit-order',
        component: EditOrderComponent, // Thêm tuyến đường cho sửa đơn hàng
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'category/create',
        component: AddCategoryComponent,
      },
      {
        path: 'category/edit/:id',
        component: EditComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },


      {
        path: 'user/edit/:id',
        component: EditUserComponent
      },


      {
        path: 'comment',
        component: CommentComponent,
      },
      {
        path: 'product/add-product',
        component: AddProductComponent,
      },
      {
        path: 'product/edit-product/:id',
        component: EditProductComponent,
      },
      {
        path: 'app-home',
        component: ClientHome,
      },

    ],
  },
];
