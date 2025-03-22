import {NavItem} from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Trang chủ', // hiển thị tên
  },
  {
    displayName: 'Dashboard', // ten hien thi
    iconName: 'layout-grid-add', // hiên thị icon
    route: '/dashboard', // định nghĩa đường dẫn
  },
  {
    navCap: 'Chức năng',
  },
  {
    displayName: 'Sản Phẩm',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Danh Mục',
    iconName: 'table',
    route: '/ui-components/category',
  },
  {
    displayName: 'Binh Luan',
    iconName: 'table',
    route: '/ui-components/comment',
  },
  {
    displayName: 'Khach hang',
    iconName: 'users',
    route: '/ui-components/user',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Đăng nhập',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Đăng nhập',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Đăng ký',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Đăng ký',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
