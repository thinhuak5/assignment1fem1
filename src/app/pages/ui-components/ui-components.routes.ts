import {Routes} from '@angular/router';

// ui
import {AppChipsComponent} from './chips/chips.component';
import {AppListsComponent} from './lists/lists.component';
import {AppFormsComponent} from './forms/forms.component';
import {AppTablesComponent} from './tables/tables.component';
import {CategoryComponent} from './category/category.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

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
    ],
  },
];
