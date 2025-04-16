export interface IProduct {
  id: number;
  name?: string;
  images?: string;
  description?: string;
  short_description?: string;
  price?: number;
  discount_price?: number;
  view?: number;
  status?: number;
  category_id?: number;
}
