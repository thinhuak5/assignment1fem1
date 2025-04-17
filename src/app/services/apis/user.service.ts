import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_ENDPOINT} from '../../config/api-endpoint.config';
import {ApiService} from '../common/api.service';
import {IUser} from '../../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(http: HttpClient) {
    super(http);  // Gọi constructor cha và truyền HttpClient
  }

  getUsers(): Observable<IUser[]> {
    return this.get<IUser[]>(API_ENDPOINT.user.base + API_ENDPOINT.user.list);
  }


  createUser(data: FormData): Observable<any> {
    return this.postForm(API_ENDPOINT.user.base, data); // Đã thêm postForm vào ApiService
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.put(API_ENDPOINT.user.base + '/' + id, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.delete(API_ENDPOINT.user.base + '/' + id);
  }


  getUserById(id: number): Observable<IUser> {
    // Cập nhật URL API đúng theo route của bạn
    return this.get<IUser>(API_ENDPOINT.user.base + '/' + id);  // Đúng URL: /api/users/:id

  }

}
