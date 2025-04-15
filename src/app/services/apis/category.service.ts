import {Injectable} from '@angular/core';
import {ApiService} from '../common/api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from '../../interface/category.interface';
import {API_ENDPOINT} from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService { // ApiService la cha

  constructor(
    private _http: HttpClient, // private là dùng để khai báo không cho ai truy cập nếu ko có quyền
  ) {
    super(_http)
  };

  getCategories(): Observable<ICategory[]> { // định nghĩa kiểu dự liệu trả về  Observable<ICategory[]>
    return this.get<ICategory[]>(API_ENDPOINT.category.base + API_ENDPOINT.category.list);
  }// kết quả đường dẫn là :http://localhost:3000/categories/list // lấy đường dẫn từ api-endpoint.config.ts
  deleteCategory(id: number) {
    return this.delete(API_ENDPOINT.category.base + '/' + id);
  }

  createCategory(data: ICategory) {
    return this.post(API_ENDPOINT.category.base + '/add', data);
  }

  updateCategory(id: number, data: any) {
    return this.put(API_ENDPOINT.category.base + '/' + id, data);
  }


}
