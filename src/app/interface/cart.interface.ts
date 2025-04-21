export interface ICart {
  id?: number; // Được phép là undefined nếu chưa có
  user_id: number;
  product_id: number;
  quantity: number;
  price: number;
  status: number;  // 0: chưa thanh toán, 1: đã thanh toán
}
