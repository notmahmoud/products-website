"use client";

import { useState } from "react";
import type { Product } from "../product.types";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addToCart } from "@/features/cart/cartSlice";

type ProductPurchaseActionsProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function ProductPurchaseActions({
  product,
}: ProductPurchaseActionsProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const isOutOfStock = product.stock <= 0;
  const maxAvailable = Math.max(1, product.stock);

  function handleDecrement() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrement() {
    setQuantity((prev) => Math.min(maxAvailable, prev + 1));
  }

  function handleAddToCart() {
    if (isOutOfStock) return;

    // Dispatch addToCart for the selected quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  }

  return (
    <div className="flex flex-col gap-space-md mb-space-xl">
      <div className="flex items-center gap-space-md">
        {/* Quantity Stepper */}
        <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-1.5 h-12">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={isOutOfStock || quantity <= 1}
            onClick={handleDecrement}
            className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container-low disabled:opacity-40 disabled:cursor-not-allowed rounded transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span className="w-10 text-center font-numeral-price text-numeral-price text-primary font-semibold select-none">
            {isOutOfStock ? 0 : quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            disabled={isOutOfStock || quantity >= maxAvailable}
            onClick={handleIncrement}
            className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container-low disabled:opacity-40 disabled:cursor-not-allowed rounded transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>

        {/* Primary Add to Cart CTA */}
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={handleAddToCart}
          className="flex-1 h-12 bg-primary hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-title-md text-title-md rounded-lg flex items-center justify-center gap-2 transition-all duration-150 shadow-sm active:scale-[0.99] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">
            shopping_bag
          </span>
          <span>
            {isOutOfStock ? "Sold Out" : "Add to Cart"}
          </span>
          {!isOutOfStock && (
            <span className="font-numeral-price font-normal text-on-primary/80">
              — {priceFormatter.format(product.price * quantity)}
            </span>
          )}
        </button>
      </div>

      {/* Notification feedback banner */}
      {addedNotice && (
        <div className="bg-secondary-container text-on-secondary-container p-3 rounded-lg font-body-sm text-body-sm flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              check_circle
            </span>
            <span>
              {quantity} {quantity === 1 ? "item" : "items"} added to your cart.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

