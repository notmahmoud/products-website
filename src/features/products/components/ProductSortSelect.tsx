import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { ProductSort } from "../product.types";

type ProductSortSelectProps = {
  sort: ProductSort;
  handleSortChange: (sort: ProductSort) => void;
};

export default function ProductSortSelect({
  sort,
  handleSortChange,
}: ProductSortSelectProps) {
  return (
    <FormControl size="small" className="w-full lg:w-48">
      <InputLabel id="sort-label" shrink>
        Sort by
      </InputLabel>

      <Select<ProductSort>
        labelId="sort-label"
        label="Sort by"
        value={sort}
        displayEmpty
        onChange={(e) => {
          const value = e.target.value;

          if (value === "" || value === "price" || value === "-price") {
            handleSortChange(value);
          }
        }}
      >
        <MenuItem value="">Default order</MenuItem>
        <MenuItem value="price">Price: low to high</MenuItem>
        <MenuItem value="-price">Price: high to low</MenuItem>
      </Select>
    </FormControl>
  );
}
