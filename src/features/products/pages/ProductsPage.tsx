"use client";

import Pagination from "@mui/material/Pagination";
import { useState } from "react";

import type {
  Product,
  ProductsResponse,
} from "@/features/products/product.types";

import ProductCard from "@/features/products/components/ProductCard";
import ProductFilters from "@/features/products/components/ProductFilters";
import ProductSearch from "@/features/products/components/ProductSearch";
import ProductQuickView from "@/features/products/components/ProductQuickView";
import useProductQuery from "@/features/products/useProductQuery";

type ProductsPageProps = {
  productsResponse: ProductsResponse;
};

export default function ProductsPage({ productsResponse }: ProductsPageProps) {
  const {
    page,
    setPage,
    category,
    sort,
    searchText,
    setSearchText,
    handleCategoryChange,
    handleSortChange,
    handleSearch,
  } = useProductQuery();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const items = productsResponse.data;
  const totalPages = productsResponse.pages;
  const totalItems = productsResponse.items;

  function handleQuickView(product: Product) {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  }

  function handleCloseQuickView() {
    setQuickViewOpen(false);
  }

  return (
    <>
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg pb-space-md border-b border-outline-variant">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
            Curation · Collection Archive
          </span>

          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            All Curated Essentials
          </h1>
        </div>

        <div className="flex items-center gap-space-sm">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Showing {totalItems}{" "}
            {totalItems === 1 ? "Selected Item" : "Selected Items"}
          </span>
        </div>
      </div>

      {/* Discovery & Filter Bar */}
      <div className="flex flex-col gap-5 pb-space-xl lg:flex-row lg:items-center lg:justify-between">
        <ProductSearch
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />

        <ProductFilters
          category={category}
          handleCategoryChange={handleCategoryChange}
          sort={sort}
          handleSortChange={handleSortChange}
        />
      </div>

      {/* Product Grid / Empty State */}
      {items.length === 0 ? (
        <div className="py-20 text-center">
          <span
            className="material-symbols-outlined text-outline text-[48px] mb-space-md block"
            aria-hidden="true"
          >
            inventory_2
          </span>

          <h2 className="font-headline-md text-headline-md text-primary">
            Nothing found this time.
          </h2>

          <p className="mt-space-xs text-body-md text-on-surface-variant">
            Try another search or choose a different category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <ProductCard
              product={item}
              key={item.id}
              handleQuickView={handleQuickView}
            />
          ))}
        </div>
      )}

      {/* Quick View Dialog */}
      <ProductQuickView
        selectedProduct={selectedProduct}
        quickViewOpen={quickViewOpen}
        handleCloseQuickView={handleCloseQuickView}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14 flex justify-center border-t border-outline-variant pt-8">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, selectedPage) => setPage(selectedPage)}
            color="primary"
            shape="rounded"
          />
        </div>
      )}
    </>
  );
}
