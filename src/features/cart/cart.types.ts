import type { Product } from "../products/product.types";

export type CartItem = {
  product: Product;
  quantity: number;
};
