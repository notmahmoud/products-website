// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { fetchProducts } from "./productsSlice";
// import type { ProductSort } from "./product.types";
// import { useAppDispatch } from "../../app/hooks";

// const categories = ["beauty", "fragrances", "furniture", "groceries"];

// export default function useProductQuery() {
//   const dispatch = useAppDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Read and validate URL values.
//   const pageParam = Number(searchParams.get("page") ?? "1");
//   const page = Number.isSafeInteger(pageParam) && pageParam > 0 ? pageParam : 1;

//   const categoryParam = searchParams.get("category") ?? "";
//   const category = categories.includes(categoryParam) ? categoryParam : "";

//   const sortParam = searchParams.get("sort");
//   const sort: ProductSort =
//     sortParam === "price" || sortParam === "-price" ? sortParam : "";

//   const search = (searchParams.get("search") ?? "").trim();

//   // Draft input stays local until the form is submitted.
//   const [searchText, setSearchText] = useState(search);

//   // Keep the input aligned when Back/Forward changes the submitted search.
//   useEffect(() => {
//     setSearchText(search);
//   }, [search]);

//   useEffect(() => {
//     const request = dispatch(fetchProducts({ page, category, sort, search }));

//     return () => {
//       // Cancel outdated requests when query values change or the page unmounts.
//       request.abort();
//     };
//   }, [dispatch, page, category, sort, search]);

//   function setPage(selectedPage: number) {
//     setSearchParams((previousParams) => {
//       const nextParams = new URLSearchParams(previousParams);

//       if (selectedPage === 1) {
//         nextParams.delete("page");
//       } else {
//         nextParams.set("page", String(selectedPage));
//       }

//       return nextParams;
//     });
//   }

//   function handleCategoryChange(selectedCategory: string) {
//     setSearchParams((previousParams) => {
//       const nextParams = new URLSearchParams(previousParams);

//       if (selectedCategory === "") {
//         nextParams.delete("category");
//       } else {
//         nextParams.set("category", selectedCategory);
//       }

//       nextParams.delete("page");
//       return nextParams;
//     });
//   }

//   function handleSortChange(selectedSort: ProductSort) {
//     setSearchParams((previousParams) => {
//       const nextParams = new URLSearchParams(previousParams);

//       if (selectedSort === "") {
//         nextParams.delete("sort");
//       } else {
//         nextParams.set("sort", selectedSort);
//       }

//       nextParams.delete("page");
//       return nextParams;
//     });
//   }

//   function handleSearch() {
//     const submittedSearch = searchText.trim();

//     setSearchText(submittedSearch);

//     setSearchParams((previousParams) => {
//       const nextParams = new URLSearchParams(previousParams);

//       if (submittedSearch === "") {
//         nextParams.delete("search");
//       } else {
//         nextParams.set("search", submittedSearch);
//       }

//       nextParams.delete("page");
//       return nextParams;
//     });
//   }

//   return {
//     page,
//     setPage,
//     category,
//     sort,
//     searchText,
//     setSearchText,
//     search,
//     handleCategoryChange,
//     handleSortChange,
//     handleSearch,
//   };
// }
