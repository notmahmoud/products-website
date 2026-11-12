import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils/formatters";
import type { Product } from "@/features/products/product.types";

type RelatedProductsProps = {
  relatedProducts: Product[];
};
export default function RelatedProducts({
  relatedProducts,
}: RelatedProductsProps) {
  return (
    <section className="max-w-345 w-full mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-xl border-t border-outline-variant/60 mt-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Cohesive Regimen
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
            Similar items
          </h2>
        </div>
        <Link
          href="/products"
          className="font-title-md text-label-md text-primary hover:text-secondary flex items-center gap-1 transition-colors"
        >
          <span>View All Curated Goods</span>
          <span className="material-symbols-outlined text-[18px]">
            arrow_right_alt
          </span>
        </Link>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {relatedProducts.map((item) => (
          <article
            key={item.id}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group transition-all duration-200 hover:-translate-y-1 h-full justify-between"
          >
            <div>
              <Link
                href={`/products/${item.id}`}
                className="w-full aspect-4/5 bg-surface-container-low overflow-hidden relative block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {item.category}
                </span>
              </Link>

              <div className="p-4 pb-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-title-md text-title-md text-primary line-clamp-1">
                  <Link
                    href={`/products/${item.id}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="font-numeral-price text-numeral-price text-primary font-semibold">
                  {formatPrice(item.price)}
                </p>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-surface-variant/40">
              <Link
                href={`/products/${item.id}`}
                className="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary font-title-md text-label-md rounded-lg text-center transition-colors block"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
