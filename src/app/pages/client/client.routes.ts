import {Routes} from '@angular/router';
import {SideHomeComponent} from './side-home/side-home.component';

export const ClientRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: SideHomeComponent,
      },
    ],
  },
];
