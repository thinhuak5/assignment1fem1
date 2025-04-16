import {enviroment} from "../../enviroments/enviroments";

export const API_BASE_URL = enviroment.apiUrl;

export const API_ENDPOINT = {
  auth: {
    base: API_BASE_URL + '/api', // Thêm '/api' vào base URL
    login: '/login',
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
  }
};
