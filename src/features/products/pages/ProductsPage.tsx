"use client";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchProducts } from "@/features/products/productsSlice";
import type { Product } from "@/features/products/product.types";

import ProductCard from "@/features/products/components/ProductCard";
import ProductFilters from "@/features/products/components/ProductFilters";
import ProductSearch from "@/features/products/components/ProductSearch";
import ProductQuickView from "@/features/products/components/ProductQuickView";
import useProductQuery from "@/features/products/useProductQuery";

export default function ProductsPage() {
  const {
    page,
    setPage,
    category,
    sort,
    searchText,
    setSearchText,
    search,
    handleCategoryChange,
    handleSortChange,
    handleSearch,
  } = useProductQuery();

  const dispatch = useAppDispatch();

  // Modal quickview state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const items = useAppSelector((state) => state.products.items);
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);
  const totalPages = useAppSelector((state) => state.products.totalPages);
  const totalItems = useAppSelector((state) => state.products.totalItems);

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
          {status === "succeeded" && (
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing {totalItems} {totalItems === 1 ? "Selected Item" : "Selected Items"}
            </span>
          )}
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

      {/* Loading State */}
      {(status === "idle" || status === "loading") && (
        <div
          className="flex min-h-80 items-center justify-center"
          role="status"
        >
          <CircularProgress
            size={32}
            thickness={3}
            aria-label="Loading products"
            sx={{ color: "var(--color-primary, #233120)" }}
          />
        </div>
      )}

      {/* Error State */}
      {status === "failed" && (
        <Alert
          severity="error"
          className="my-8"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() =>
                dispatch(fetchProducts({ page, category, sort, search }))
              }
            >
              Retry
            </Button>
          }
        >
          {error ?? "Unable to load products. Please try again."}
        </Alert>
      )}

      {/* Product Grid / Empty State */}
      {status === "succeeded" &&
        (items.length === 0 ? (
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
        ))}

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
            disabled={status === "loading"}
            color="primary"
            shape="rounded"
          />
        </div>
      )}
    </>
  );
}
