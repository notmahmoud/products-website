import Link from "next/link";
import type { Product } from "@/features/products/product.types";

type ArchiveProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function ArchiveProductCard({
  product,
}: ArchiveProductCardProps) {
  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full justify-between">
      <div>
        {/* Full-bleed background on left, right, top */}
        <Link
          href={`/products/${product.id}`}
          className="w-full aspect-4/5 bg-surface-container-low overflow-hidden relative block"
        >
          <img
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
            alt={product.title}
            src={product.image}
            loading="lazy"
          />
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-surface-container/90 backdrop-blur-sm font-label-sm text-label-sm text-primary capitalize">
            {product.category}
          </span>
        </Link>

        {/* Card Details */}
        <div className="p-4 pb-2">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">
            {product.category}
          </span>
          <h3 className="font-title-md text-title-md text-primary mb-1 line-clamp-1">
            <Link
              href={`/products/${product.id}`}
              className="hover:text-secondary transition-colors"
            >
              {product.title}
            </Link>
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 pt-2 border-t border-surface-variant/40">
        <span className="font-numeral-price text-numeral-price text-primary">
          {priceFormatter.format(product.price)}
        </span>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-1 font-title-md text-label-md text-on-primary bg-primary hover:bg-primary-container px-3 py-1.5 rounded transition-colors"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
