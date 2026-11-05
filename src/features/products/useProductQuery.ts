import { useEffect, useState } from "react";
import { fetchProducts } from "./productsSlice";
import type { ProductSort } from "./product.types";
import { useAppDispatch } from "../../lib/redux/hooks";
export default function useProductQuery() {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState<ProductSort>("");
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const request = dispatch(fetchProducts({ page, category, sort, search }));

    //Request cancellation: stopping an outdated request.
    return () => {
      //prevents older result A overriding newer result B
      request.abort();
    };
  }, [dispatch, page, category, sort, search]);

  //
  function handleCategoryChange(selectedCategory: string) {
    setCategory(selectedCategory);
    setPage(1);
  }

  //
  function handleSortChange(selectedSort: ProductSort) {
    setSort(selectedSort);
    setPage(1);
  }
  //
  function handleSearch() {
    setSearch(searchText.trim());
    setPage(1);
  }

  return {
    page,
    setPage,
    category,
    sort,
    searchText,
    setSearchText,
    search,
    handleCategoryChange,
    handleSortChange,
    handleSearch,
  };
}
