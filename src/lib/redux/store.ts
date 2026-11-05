import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "@/features/products/productsSlice";
import cartReducer from "@/features/cart/cartSlice";
import authReducer from "@/features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
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
