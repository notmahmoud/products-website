import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
{
  products: {
    items: [
      {
        id: "1",
        title: "Essence Mascara",
        description: "Everyday mascara.",
        price: 350,
        category: "beauty",
        image: "https://example.com/mascara.webp",
        stock: 18
      },
      {
        id: "12",
        title: "Classic Accent Sofa",
        description: "An upholstered sofa.",
        price: 32000,
        category: "furniture",
        image: "https://example.com/sofa.webp",
        stock: 2
      }
    ],
    status: "succeeded",
    error: null,
    totalPages: 4,
    totalItems: 30
  },

  cart: {
    items: [
      {
        product: {
          id: "1",
          title: "Essence Mascara",
          description: "Everyday mascara.",
          price: 350,
          category: "beauty",
          image: "https://example.com/mascara.webp",
          stock: 18
        },
        quantity: 3
      },
      {
        product: {
          id: "12",
          title: "Classic Accent Sofa",
          description: "An upholstered sofa.",
          price: 32000,
          category: "furniture",
          image: "https://example.com/sofa.webp",
          stock: 2
        },
        quantity: 1
      }
    ]
  }
}
*/
