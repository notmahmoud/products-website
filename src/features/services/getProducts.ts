import "server-only";
import axios from "axios";
import type {
  ProductsQuery,
  ProductsResponse,
} from "@/features/products/product.types";

export default async function getProducts(
  query: ProductsQuery,
): Promise<ProductsResponse> {
  const API_URL = process.env.JSON_SERVER_URL;

  if (!API_URL) {
    throw new Error("JSON_SERVER_URL is not configured");
  }

  const { page, category, sort, search } = query;

  const response = await axios.get<ProductsResponse>(`${API_URL}/products`, {
    params: {
      _page: page,
      _per_page: 8,
      category: category || undefined,
      _sort: sort || undefined,
      "title:contains": search || undefined,
    },
  });

  return response.data;
}
