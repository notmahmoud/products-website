import Link from "next/link";
import type { Product } from "@/features/products/product.types";

type ProductBreadcrumbsProps = {
  product: Product;
};

export default function ProductBreadcrumbs({
  product,
}: ProductBreadcrumbsProps) {
  return (
    <section className="max-w-345 w-full mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-6 pb-4">
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline">/</span>
          <Link
            href="/products"
            className="hover:text-primary transition-colors"
          >
            Products
          </Link>
          <span className="text-outline">/</span>
          <span className="text-on-surface-variant capitalize">
            {product.category}
          </span>
          <span className="text-outline">/</span>
          <span className="text-primary font-semibold truncate max-w-50 sm:max-w-none">
            {product.title}
          </span>
        </nav>
        <div className="hidden sm:flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <span>CATALOGUE ENTRY: #{product.id}</span>
        </div>
      </div>
    </section>
  );
}
