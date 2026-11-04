import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Product, ProductsQuery, ProductsResponse } from "./product.types";

type ProductsState = {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  totalPages: number;
  totalItems: number;
};

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
  totalPages: 0,
  totalItems: 0,
};

export const fetchProducts = createAsyncThunk<ProductsResponse, ProductsQuery>(
  "products/fetchProducts",
  async ({ page, category, sort, search }, { signal }) => {
    // signal prevents an older response from overwriting newer results.
    const response = await axios.get<ProductsResponse>(
      "http://localhost:3005/products",
      {
        signal,
        params: {
          _page: page,
          _per_page: 8,
          category: category || undefined,
          _sort: sort || undefined,
          "title:contains": search || undefined,
        },
      },
    );

    return response.data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;

        //for paginaton
        state.items = action.payload.data;
        state.totalPages = action.payload.pages;
        state.totalItems = action.payload.items;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // to avoid showing an error message if it was
        // stopped due to a signal to prevent
        if (action.meta.aborted) {
          return;
        }

        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
