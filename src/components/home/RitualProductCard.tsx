import Link from "next/link";
import type { Product } from "@/features/products/product.types";

type RitualProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function RitualProductCard({ product }: RitualProductCardProps) {
  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full justify-between">
      <div>
        {/* Full-bleed background on left, right, top */}
        <Link
          href={`/products/${product.id}`}
          className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden relative block"
        >
          <img
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
            alt={product.title}
            src={product.image}
            loading="lazy"
          />
        </Link>

        {/* Card Details */}
        <div className="p-4 pb-2">
          <span className="font-label-sm text-label-sm uppercase text-secondary capitalize block mb-1">
            {product.category}
          </span>
          <h3 className="font-title-md text-title-md text-primary line-clamp-1">
            <Link
              href={`/products/${product.id}`}
              className="hover:text-secondary transition-colors"
            >
              {product.title}
            </Link>
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 pt-2 border-t border-surface-variant/40">
        <span className="font-numeral-price text-numeral-price text-primary">
          {priceFormatter.format(product.price)}
        </span>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center text-primary font-title-md text-label-md hover:text-secondary transition-colors"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
