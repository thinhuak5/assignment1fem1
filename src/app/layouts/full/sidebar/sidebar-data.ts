import {NavItem} from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Trang chủ', // hiển thị tên
  },
  {
    displayName: 'Tổng quan', // ten hien thi
    iconName: 'layout-grid-add', // hiên thị icon
    route: '/dashboard', // định nghĩa đường dẫn
  },
  {
    navCap: 'Chức năng',
  },
  // {
  //   displayName: 'Chips',
  //   iconName: 'info-circle',
  //   route: '/ui-components/chips',
  // },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list-details',
  //   route: '/ui-components/lists',
  // },
  // {
  //   displayName: 'Forms',
  //   iconName: 'clipboard-text',
  //   route: '/ui-components/forms',
  // },
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
    navCap: 'Người dùng',
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
