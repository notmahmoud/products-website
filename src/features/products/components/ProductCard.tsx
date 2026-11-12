"use client";

import Link from "next/link";
import type { Product } from "../product.types";
import { useAppDispatch } from "../../../lib/redux/hooks";
import { addToCart } from "../../cart/cartSlice";

type ProductCardProps = {
  product: Product;
  handleQuickView: (product: Product) => void;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function ProductCard({
  product,
  handleQuickView,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full justify-between">
      <div>
        {/* Full-bleed background on left, right, top */}
        <Link
          href={`/products/${product.id}`}
          className="w-full aspect-4/5 bg-surface-container-low overflow-hidden relative block"
        >
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {product.stock <= 0 ? (
            <span className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[11px] font-semibold text-error">
              Sold out
            </span>
          ) : (
            <span className="absolute top-2.5 right-2.5 bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded font-label-sm text-label-sm text-primary capitalize">
              {product.category}
            </span>
          )}
        </Link>

        {/* Card Details */}
        <div className="p-4 pb-2">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">
            {product.category}
          </span>

          <h2 className="font-title-md text-title-md text-primary mb-1 line-clamp-1">
            <Link
              href={`/products/${product.id}`}
              className="hover:text-secondary transition-colors"
            >
              {product.title}
            </Link>
          </h2>

          <span className="font-numeral-price text-numeral-price text-primary block">
            {priceFormatter.format(product.price)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-2 flex items-center gap-2 border-t border-surface-variant/40">
        <button
          type="button"
          onClick={() => handleQuickView(product)}
          className="flex-1 py-2 px-2 bg-surface-container-high text-primary hover:bg-surface-container-highest font-label-md text-label-md rounded-lg transition-colors cursor-pointer text-center"
        >
          Quick View
        </button>

        <button
          type="button"
          disabled={product.stock <= 0}
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 py-2 px-2 bg-primary text-on-primary hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed font-label-md text-label-md rounded-lg transition-colors cursor-pointer text-center"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
