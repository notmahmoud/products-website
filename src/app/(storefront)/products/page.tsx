import type { Metadata } from "next";
import getProducts from "@/features/services/getProducts";
import ProductsPage from "@/features/products/pages/ProductsPage";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Products — ShopSpace",
};

export default async function ProductsRoute() {
  const productsResponse = await getProducts({
    page: 1,
    category: "",
    sort: "",
    search: "",
  });

  return (
    <div className="w-full max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
      <ProductsPage productsResponse={productsResponse} />
    </div>
  );
}
