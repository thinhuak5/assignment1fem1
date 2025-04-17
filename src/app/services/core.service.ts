import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // Import HttpClient
import {catchError, Observable, throwError} from 'rxjs';
import {AppSettings, defaults} from '../config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private optionsSignal = signal<AppSettings>(defaults);
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  // Lấy cấu hình hiện tại
  getOptions() {
    return this.optionsSignal();
  }

  // Cập nhật cấu hình
  setOptions(options: Partial<AppSettings>) {
    this.optionsSignal.update((current) => ({
      ...current,
      ...options,
    }));
  }

  // Gọi API đăng ký
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/api/register`, data)
      .pipe(
        catchError((error) => {
          console.error('Lỗi khi gọi API đăng ký: ', error);
          if (error.status === 404) {
            alert('Endpoint đăng ký không tìm thấy (404)');
          } else {
            alert(`Lỗi: ${error.message}`);
          }
          return throwError(() => new Error('Có lỗi khi đăng ký, vui lòng thử lại.'));
        })
      );
  }


  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, data).pipe(
      catchError((error) => {
        console.error('Lỗi khi gọi API đăng nhập: ', error);
        return throwError(() => new Error('Có lỗi khi đăng nhập, vui lòng thử lại.'));
      })
    );
  }

}
