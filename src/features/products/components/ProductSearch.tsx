import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type ProductSearchProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  handleSearch: () => void;
};

export default function ProductSearch({
  searchText,
  setSearchText,
  handleSearch,
}: ProductSearchProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
      role="search"
      className="flex w-full gap-2 lg:max-w-md"
    >
      <TextField
        label="Search products"
        placeholder="Find something..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        size="small"
        fullWidth
      />

      <Button type="submit" variant="contained" className="shrink-0 px-5">
        Search
      </Button>
    </form>
  );
}
