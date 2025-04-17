import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  /**
   * @method GET
   */
  get<T>(apiUrl: string, parameter: any[] = [], customHeaders?: HttpHeaders): Observable<T> {
    parameter.forEach(p => {
      apiUrl += ('/' + p);
    });

    return this.http.get<T>(
      apiUrl, {headers: customHeaders ?? this.getHeaders()},
    );
  }

  /**
   * @method POST
   */
  post<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.post<T>(
      apiUrl,
      body ? JSON.stringify(body) : {},
      {headers: customHeaders ?? this.getHeaders()},
    );
  }

  /**
   * ✅ NEW: POST with FormData (used in UserService)
   */
  postForm<T>(apiUrl: string, formData: FormData, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.post<T>(
      apiUrl,
      formData,
      {
        headers: customHeaders ?? new HttpHeaders({
          'Authorization': this.getToken() ?? ''
          // ❌ Don't set 'Content-Type' here — Angular will handle it automatically for FormData
        })
      }
    );
  }

  /**
   * @method PATCH
   */
  patch<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(
      apiUrl,
      body ? JSON.stringify(body) : {},
      {headers: customHeaders ?? this.getHeaders()},
    );
  }

  /**
   * @method PUT
   */
  put<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.put<T>(
      apiUrl,
      body ? JSON.stringify(body) : {},
      {headers: customHeaders ?? this.getHeaders()},
    );
  }

  /**
   * @method DELETE
   */
  delete(apiUrl: string, parameter: any[] = [], customHeaders?: HttpHeaders) {
    if (parameter && parameter.length > 0) {
      parameter.forEach((p: string) => {
        apiUrl += ('/' + p);
      });
    }
    return this.http.delete(
      apiUrl,
      {headers: customHeaders ?? this.getHeaders()},
    );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken(),
      },
    );
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

}
