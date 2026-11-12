/* eslint-disable react-refresh/only-export-components */
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Product } from "@/features/products/product.types";

import ProductSpecifications from "./_components/ProductSpecifications";
import ProductBreadcrumbs from "./_components/ProductBreadcrumbs";
import ProductInformation from "./_components/ProductInformation";
import ProductFulfillment from "./_components/ProductFulfillment";
import ProductGallery from "./_components/ProductGallery";
import RelatedProducts from "./_components/RelatedProducts";

import { getProductById, getProducts } from "./product-queries";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found — ShopSpace",
    };
  }

  return {
    title: `${product.title} — ShopSpace`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const products = await getProducts();

  // Prefer products from the same category.
  const categoryComplements = products.filter(
    (p) => String(p.id) !== id && p.category === product.category,
  );

  // Fill the remaining slots with products from other categories.
  const otherComplements = products.filter(
    (p) => String(p.id) !== id && p.category !== product.category,
  );

  const relatedProducts: Product[] = [
    ...categoryComplements,
    ...otherComplements,
  ].slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      <ProductBreadcrumbs product={product} />

      {/* Main product showcase section */}
      <section className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md lg:py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Left column: gallery & showcase */}
          <ProductGallery product={product} />

          {/* Right column: purchase & details panel */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <ProductInformation product={product} />
            <ProductSpecifications product={product} />
            <ProductFulfillment />
          </div>
        </div>
      </section>

      {/* Related products section) */}
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
}
