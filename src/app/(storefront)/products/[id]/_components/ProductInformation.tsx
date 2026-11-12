import ProductPurchaseActions from "@/features/products/components/ProductPurchaseActions";
import type { Product } from "@/features/products/product.types";
import { formatPrice } from "@/lib/utils/formatters";
type ProductInformationProps = {
  product: Product;
};

export default function ProductInformation({
  product,
}: ProductInformationProps) {
  return (
    <div className="flex flex-col pt-space-xs lg:pl-space-md">
      {/* Header Meta */}
      <div className="flex items-center justify-between pb-space-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
          {product.category} Archive
        </span>
      </div>
      {/* Product Title */}
      <h1 className="font-headline-lg text-headline-lg text-primary leading-tight mt-1 mb-space-sm">
        {product.title}
      </h1>
      {/* Price & Stock Status Row */}
      <div className="flex items-baseline justify-between py-space-sm mb-space-md bg-surface-container-low px-space-md rounded-lg">
        <div className="flex items-baseline gap-space-xs">
          <span className="font-numeral-price text-[26px] text-primary font-semibold">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-container bg-secondary-fixed/50 px-2.5 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-medium">
            {product.stock > 0
              ? `In Stock (${product.stock} available)`
              : "Currently Sold Out"}
          </span>
        </div>
      </div>
      {/* Editorial Description */}
      <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg">
        {product.description}
      </p>
      {/* Purchase Actions: Counter + CTA (Client Component Boundary) */}
      <ProductPurchaseActions product={product} />
    </div>
  );
}
