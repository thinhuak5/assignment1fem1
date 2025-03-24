import {Routes} from '@angular/router';

// ui
import {AppChipsComponent} from './chips/chips.component';
import {AppListsComponent} from './lists/lists.component';
import {AppFormsComponent} from './forms/forms.component';
import {AppTablesComponent} from './tables/tables.component';
import {CategoryComponent} from './category/category.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {CommentComponent} from './comment/comment.component'
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AppOrdersComponent} from './order/order.component'; // Thêm component đơn hàng
import {EditOrderComponent} from './edit-order/edit-order.component'; // Giả định component thêm đơn hàng

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
        path: 'tables',
        component: AppTablesComponent,
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
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
      },
      {
        path: 'comment',
        component: CommentComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
      },

    ],
  },
];
