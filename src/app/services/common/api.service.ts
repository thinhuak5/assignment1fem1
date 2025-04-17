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
   * @param apiUrl URL reference to API
   * @param parameter Ex: [param1, param2, param3] => result: apiUrl/param1/param2/param3
   * @param customHeaders OPTIONAL: another header value you want to customize
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
   * @param apiUrl URL reference to API
   * @param body request body
   * @param customHeaders OPTIONAL: another header value you want to customize
   */
  post<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.post<T>(
      apiUrl,
      body ? JSON.stringify(body) : {},
      {headers: customHeaders ?? this.getHeaders()},
    );
  }

  /**
   * @method PATCH
   * @param apiUrl URL reference to API
   * @param body request body
   * @param customHeaders OPTIONAL: another header value you want to customize
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
   * @param apiUrl URL reference to API
   * @param body request body
   * @param customHeaders OPTIONAL: another header value you want to customize
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
   * @param apiUrl URL reference to API
   * @param parameter Ex: [param1, param2, param3] => result: apiUrl/param1/param2/param3
   * @param customHeaders OPTIONAL: another header value you want to customize
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
