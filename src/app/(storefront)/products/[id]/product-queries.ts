import "server-only";

import type { Product } from "@/features/products/product.types";

const API_URL = process.env.JSON_SERVER_URL;

function getApiUrl() {
  if (!API_URL) {
    throw new Error("JSON_SERVER_URL is not configured");
  }

  return API_URL;
}

export async function getProductById(id: string): Promise<Product | null> {
  const response = await fetch(`${getApiUrl()}/products/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  return (await response.json()) as Product;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${getApiUrl()}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return (await response.json()) as Product[];
}
