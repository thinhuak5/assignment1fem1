import {Injectable} from '@angular/core';
import {ApiService} from '../common/api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../../interface/product.interface'; // import IProduct từ product.interface.ts
import {API_ENDPOINT} from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService {
  [x: string]: any; // ApiService là cha

  constructor(
    private _http: HttpClient, // private là dùng để khai báo không cho ai truy cập nếu không có quyền
  ) {
    super(_http);
  }

  getProducts(): Observable<IProduct[]> {
    return this.get<IProduct[]>(API_ENDPOINT.products.base + API_ENDPOINT.products.list);
  } // kết quả đường dẫn là: http://localhost:3000/products/list // lấy đường dẫn từ api-endpoint.config.ts

  deleteProducts(id: number) {
    return this.delete(API_ENDPOINT.products.base + '/' + id);
  }

  createProducts(formData: FormData) {
    return this.post(API_ENDPOINT.products.base + '/add', formData);
  }

  updateProducts(id: number, data: any) {
    return this.put(API_ENDPOINT.products.base + '/' + id, data);
  }

}
