"use client";

import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import type { Product } from "../product.types";
import { useAppDispatch } from "../../../lib/redux/hooks";
import { addToCart } from "../../cart/cartSlice";

type ProductQuickViewProps = {
  selectedProduct: Product | null;
  quickViewOpen: boolean;
  handleCloseQuickView: () => void;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function ProductQuickView({
  selectedProduct,
  quickViewOpen,
  handleCloseQuickView,
}: ProductQuickViewProps) {
  const dispatch = useAppDispatch();

  if (!selectedProduct) return null;

  return (
    <Dialog
      open={quickViewOpen}
      onClose={handleCloseQuickView}
      aria-labelledby="quick-view-title"
      fullWidth
      maxWidth="md"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "var(--radius-xl, 0.75rem)",
            backgroundColor: "var(--color-surface-container-lowest, #ffffff)",
            overflow: "hidden",
            margin: { xs: 2, sm: 3 },
          },
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className="relative grid grid-cols-1 md:grid-cols-12 w-full">
          {/* Close Button */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={handleCloseQuickView}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-low text-primary hover:bg-surface-container-highest flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          {/* Left Column: Image showcase (5 cols on md) */}
          <div className="md:col-span-5 bg-surface-container-low p-space-md sm:p-space-lg flex flex-col justify-between">
            <div className="self-start mb-space-md">
              <span className="inline-block bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-sm py-0.5 rounded tracking-wider uppercase font-semibold">
                {selectedProduct.category}
              </span>
            </div>

            <div className="w-full aspect-4/5 rounded-lg overflow-hidden bg-surface-container shadow-sm relative my-auto">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            <div className="pt-space-sm text-center md:text-left">
              <p className="font-label-sm text-label-sm text-outline tracking-wider">
                ITEM ID · #{selectedProduct.id}
              </p>
            </div>
          </div>

          {/* Right Column: Product details (7 cols on md) */}
          <div className="md:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold block mb-space-xs">
                {selectedProduct.category}
              </span>

              <h2
                id="quick-view-title"
                className="font-headline-md text-headline-md text-primary tracking-tight mb-space-xs"
              >
                {selectedProduct.title}
              </h2>

              <div className="flex items-center gap-space-md mb-space-md pb-space-sm">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  {priceFormatter.format(selectedProduct.price)}
                </span>

                {selectedProduct.stock > 0 ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm font-semibold tracking-wide">
                      In Stock ({selectedProduct.stock})
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container">
                    <span className="font-label-sm text-label-sm font-semibold tracking-wide">
                      Sold out
                    </span>
                  </div>
                )}
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                {selectedProduct.description}
              </p>
            </div>

            <div className="pt-space-md border-t border-surface-variant/40 flex flex-col gap-space-sm">
              <button
                type="button"
                disabled={selectedProduct.stock <= 0}
                onClick={() => {
                  dispatch(addToCart(selectedProduct));
                  handleCloseQuickView();
                }}
                className="w-full py-2.5 px-space-lg bg-primary text-on-primary font-title-md text-label-md rounded-lg shadow-sm hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-space-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  shopping_bag
                </span>
                <span>
                  {selectedProduct.stock > 0
                    ? `Add to Cart — ${priceFormatter.format(selectedProduct.price)}`
                    : "Out of Stock"}
                </span>
              </button>

              <div className="flex items-center gap-space-sm">
                <Link
                  href={`/products/${selectedProduct.id}`}
                  onClick={handleCloseQuickView}
                  className="flex-1 py-2.5 px-space-md border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary font-title-md text-label-md rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                  View Full Details
                </Link>

                <button
                  type="button"
                  onClick={handleCloseQuickView}
                  className="py-2.5 px-space-md border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary font-title-md text-label-md rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
