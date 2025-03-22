import {NavItem} from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home', // hiển thị tên
  },
  {
    displayName: 'Dashboard', // ten hien thi
    iconName: 'layout-grid-add', // hiên thị icon
    route: '/dashboard', // định nghĩa đường dẫn
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Binh Luan',
    iconName: 'table',
    route: '/ui-components/comment',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
