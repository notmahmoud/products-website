export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

//pagination
export type ProductsResponse = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
};

//filtering
export type ProductsQuery = {
  page: number;
  category: string;
  sort: ProductSort;
  search: string;
};

export type ProductSort = "" | "price" | "-price";
