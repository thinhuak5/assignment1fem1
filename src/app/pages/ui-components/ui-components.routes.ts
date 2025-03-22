import {Routes} from '@angular/router';

// ui
import {AppChipsComponent} from './chips/chips.component';
import {AppListsComponent} from './lists/lists.component';
import {AppFormsComponent} from './forms/forms.component';
import {AppTablesComponent} from './tables/tables.component';
import {CategoryComponent} from './category/category.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';

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
        path: 'category',
        component: CategoryComponent,
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
