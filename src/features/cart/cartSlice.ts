import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../products/product.types";
import type { CartItem } from "./cart.types";

type CartState = {
  items: CartItem[];
};

type SetQuantityPayload = {
  productId: string;
  quantity: number;
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (product.stock === 0) return;

      const existingCartItem = state.items.find(
        (cartItem) => cartItem.product.id === product.id,
      );

      //add 1 more if the item already exist
      if (existingCartItem) {
        if (existingCartItem.quantity < product.stock) {
          existingCartItem.quantity += 1;
        }
      } else {
        state.items.push({
          product,
          quantity: 1,
        });
      }
    },
    setQuantity: (state, action: PayloadAction<SetQuantityPayload>) => {
      const { productId, quantity } = action.payload;

      const existingCartItem = state.items.find(
        (item) => item.product.id === productId,
      );

      if (existingCartItem) {
        if (
          Number.isInteger(quantity) &&
          quantity >= 1 &&
          quantity <= existingCartItem.product.stock
        ) {
          existingCartItem.quantity = quantity;
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product.id !== productId);
    },
  },
});

export const { addToCart, setQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

/*
dispatch(addToCart(product));
{
  type: "cart/addToCart",
  payload: {
    id: "12",
    title: "Sofa",
    description: "A comfortable sofa.",
    price: 32000,
    category: "furniture",
    image: "https://example.com/sofa.webp",
    stock: 3
  }
}

action.payloas = product 
creating a cart item separately >>

{
  product: action.payload,                    
  quantity: 1
}
*/

// {
//   items: [
//     {
//       product: {
//         id: "12",
//         title: "Sofa",
//         stock: 3
//         // Other product fields...
//       },
//       quantity: 1
//     }
//   ]
// }
