export interface Product {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}
export interface CartItem extends Product {
  quantity: number;
}
