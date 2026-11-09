/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import ProductsPage from "@/features/products/pages/ProductsPage";

export const metadata: Metadata = {
  title: "Products — ShopSpace",
};

export default function ProductsRoute() {
  return (
    <div className="w-full max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
      <ProductsPage />
    </div>
  );
}
