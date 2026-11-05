import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { fetchProducts } from "../features/products/productsSlice";

import type { Product } from "../features/products/product.types";
import ProductCard from "../features/products/components/ProductCard";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductSearch from "../features/products/components/ProductSearch";
import ProductQuickView from "../features/products/components/ProductQuickView";
import useProductQuery from "../features/products/useProductQuery";

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

  //modal quickview
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const items = useAppSelector((state) => state.products.items);
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);
  const totalPages = useAppSelector((state) => state.products.totalPages);
  const totalItems = useAppSelector((state) => state.products.totalItems);

  // pop-up
  function handleQuickView(product: Product) {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  }

  function handleCloseQuickView() {
    setQuickViewOpen(false);
    // Keep selectedProduct so the closing animation retains its content
  }

  return (
    <>
      <div className="flex flex-col gap-5 border-b border-[#d9d0c3] py-6 lg:flex-row lg:items-center lg:justify-between">
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

      {status === "succeeded" && (
        <p className="pb-6 pt-5 text-xs tracking-wide text-[#75695e]">
          {totalItems} {totalItems === 1 ? "product" : "products"}
        </p>
      )}

      {(status === "idle" || status === "loading") && (
        <div
          className="flex min-h-80 items-center justify-center"
          role="status"
        >
          <CircularProgress
            size={28}
            thickness={3}
            aria-label="Loading products"
          />
        </div>
      )}

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

      {status === "succeeded" &&
        (items.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="font-serif text-3xl">Nothing found this time.</h2>

            <p className="mt-3 text-sm text-[#75695e]">
              Try another search or choose a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                handleQuickView={handleQuickView}
              />
            ))}
          </div>
        ))}

      <ProductQuickView
        selectedProduct={selectedProduct}
        quickViewOpen={quickViewOpen}
        handleCloseQuickView={handleCloseQuickView}
      />

      {totalPages > 1 && (
        <div className="mt-14 flex justify-center border-t border-[#d9d0c3] pt-8">
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
