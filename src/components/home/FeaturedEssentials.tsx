import type { Product } from "@/features/products/product.types";
import ArchiveProductCard from "./ArchiveProductCard";

type FeaturedEssentialsProps = {
  products: Product[];
};

export default function FeaturedEssentials({
  products,
}: FeaturedEssentialsProps) {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="featured">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
              Signature Archive
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Featured Essentials
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            A rotating assembly of studio crafted staples, formulated and shaped
            to withstand fleeting trends.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ArchiveProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
