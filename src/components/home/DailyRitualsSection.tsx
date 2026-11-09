import type { Product } from "@/features/products/product.types";
import RitualProductCard from "./RitualProductCard";

type DailyRitualsSectionProps = {
  products: Product[];
};

export default function DailyRitualsSection({
  products,
}: DailyRitualsSectionProps) {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
              Daily Rituals
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Pantry &amp; Living Curations
            </h2>
          </div>
          <a
            href="#featured"
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-primary hover:text-secondary transition-colors mt-space-sm sm:mt-0"
          >
            <span>Browse All Products</span>
            <span
              className="material-symbols-outlined text-lg"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <RitualProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
