import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type ProductCategorySelectProps = {
  category: string;
  handleCategoryChange: (category: string) => void;
};

export default function ProductCategorySelect({
  category,
  handleCategoryChange,
}: ProductCategorySelectProps) {
  return (
    <FormControl size="small" className="w-full lg:w-48">
      <InputLabel id="category-label" shrink>
        Category
      </InputLabel>

      <Select
        labelId="category-label"
        label="Category"
        value={category}
        displayEmpty
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <MenuItem value="">All categories</MenuItem>
        <MenuItem value="beauty">Beauty</MenuItem>
        <MenuItem value="fragrances">Fragrances</MenuItem>
        <MenuItem value="furniture">Furniture</MenuItem>
        <MenuItem value="groceries">Groceries</MenuItem>
      </Select>
    </FormControl>
  );
}
