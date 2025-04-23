import {enviroment} from "../../enviroments/enviroments";

export const API_BASE_URL = enviroment.apiUrl;

export const API_ENDPOINT = {
  auth: {
    base: API_BASE_URL + '/api', // Thêm '/api' vào base URL
    login: '/login',
    register: '/register',
  },
  products: {
    base: API_BASE_URL + '/api' + '/products',
    list: '/list',
    add: '/add',
    update: '/:id',
    delete: '/:id',
  },
  category: {
    base: API_BASE_URL + '/api' + '/categories',
    list: '/list',
    add: '/add',
    delete: '/:id',
  },
  user: {
    base: API_BASE_URL + '/api' + '/users',
    list: '/list',         // Lấy danh sách
    add: '/add',
    update: '/:id',        // Đường dẫn cập nhật người dùng theo ID
    delete: '/:id',        // Đường dẫn xóa người dùng theo ID
  },
  cart: {
    base: API_BASE_URL + '/api' + '/carts',  // URL base
    list: '',  // Đã có /carts là đủ
    add: '',   // Đã có /carts là đủ (dùng POST /carts)
    delete: '/:product_id',  // Cập nhật route xoá theo ID sản phẩm
    update: '/:product_id',  // Cập nhật số lượng sản phẩm theo ID
  }

};
