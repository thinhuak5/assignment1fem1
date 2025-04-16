export interface IProduct {
  id: number;
  name?: string;
  images?: string;
  description?: string;
  short_description?: string;
  price?: string;
  discount_price?: string;
  view?: number;
  status?: number;
  category_id?: number;
}
