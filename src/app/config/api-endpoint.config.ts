import {enviroment} from "../../enviroments/enviroments";

export const API_BASE_URL = enviroment.apiUrl;

export const API_ENDPOINT = {
  category: {
    base: API_BASE_URL + '/api' + '/categories',
    list: '/list',
    add: '/add',
    delete: '/:id',
  }
};
