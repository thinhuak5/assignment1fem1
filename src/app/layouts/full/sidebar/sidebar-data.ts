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
    route: '/ui-components/products',
  },
  {
    displayName: 'Đơn Hàng',
    iconName: 'shopping-cart',
    route: '/ui-components/order',
  },
  {
    displayName: 'Danh Mục',
    iconName: 'table',
    route: '/ui-components/category',
  },
  {
    displayName: 'Bình Luận',
    iconName: 'message-circle',
    route: '/ui-components/comment',
  },
  {
    displayName: 'Khach hang',
    iconName: 'users',
    route: '/ui-components/user',
  },
  {
    displayName: 'trang chủ',
    iconName: 'users',
    route: '/ui-components/app-home',
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
