import type { Product } from "@/features/products/product.types";
type ProductSpecificationsProps = {
  product: Product;
};
export default function ProductSpecifications({
  product,
}: ProductSpecificationsProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-space-md shadow-sm mb-space-lg">
      <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-space-sm font-semibold">
        Item Specifications
      </h2>
      <dl className="space-y-space-xs font-body-sm text-body-sm">
        <div className="flex justify-between py-1.5 bg-surface-container-low/40 px-2 rounded">
          <dt className="text-on-surface-variant font-medium">Category</dt>
          <dd className="text-primary font-semibold capitalize">
            {product.category}
          </dd>
        </div>
        <div className="flex justify-between py-1.5 px-2">
          <dt className="text-on-surface-variant font-medium">Item ID</dt>
          <dd className="text-primary font-semibold">#{product.id}</dd>
        </div>
        <div className="flex justify-between py-1.5 bg-surface-container-low/40 px-2 rounded">
          <dt className="text-on-surface-variant font-medium">Stock Status</dt>
          <dd className="text-primary font-semibold">
            {product.stock > 0 ? `${product.stock} units` : "Out of stock"}
          </dd>
        </div>
        <div className="flex justify-between py-1.5 px-2">
          <dt className="text-on-surface-variant font-medium">Currency</dt>
          <dd className="text-primary font-semibold">EGP</dd>
        </div>
      </dl>
    </div>
  );
}
