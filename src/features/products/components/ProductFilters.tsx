import ProductCategorySelect from "./ProductCategorySelect";
import ProductSortSelect from "./ProductSortSelect";
import type { ProductSort } from "../product.types";

type ProductFiltersProps = {
  category: string;
  handleCategoryChange: (category: string) => void;
  sort: ProductSort;
  handleSortChange: (sort: ProductSort) => void;
};

export default function ProductFilters({
  category,
  handleCategoryChange,
  sort,
  handleSortChange,
}: ProductFiltersProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-auto">
      <ProductCategorySelect
        category={category}
        handleCategoryChange={handleCategoryChange}
      />

      <ProductSortSelect sort={sort} handleSortChange={handleSortChange} />
    </div>
  );
}
