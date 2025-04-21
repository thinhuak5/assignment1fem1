import {Injectable} from '@angular/core';
import {ApiService} from '../common/api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICart} from '../../interface/cart.interface';
import {API_ENDPOINT} from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  getCartItems(): Observable<ICart[]> {
    return this.get<ICart[]>(API_ENDPOINT.cart.base + API_ENDPOINT.cart.list);
  }

  // cart.service.ts
// cart.service.ts
  addToCart(productId: number, quantity: number, userId: number, price: number): Observable<ICart> {
    const url = API_ENDPOINT.cart.base;  // Đổi thành /carts (Không cần /add nữa)
    return this.post<ICart>(url, {
      product_id: productId,
      quantity: quantity,
      user_id: userId,
      price: price,
      status: 0  // Mặc định status là 0 (chưa thanh toán)
    });
  }


  removeFromCart(id: number): Observable<any> {
    return this.delete(API_ENDPOINT.cart.base + API_ENDPOINT.cart.delete + '/' + id);
  }

  updateCartItem(id: number, data: Partial<ICart>): Observable<Partial<ICart>> {
    return this.put<Partial<ICart>>(API_ENDPOINT.cart.base + API_ENDPOINT.cart.update + '/' + id, data);
  }


  getCartByUser(userId: number): Observable<ICart[]> {
    return this.get<ICart[]>(`${API_ENDPOINT.cart.base}/user/${userId}`);
  }
}
