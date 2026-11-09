/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import type { Product } from "@/features/products/product.types";

export const metadata: Metadata = {
  title: "Home — ShopSpace",
};
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedArchiveSection from "@/components/home/FeaturedArchiveSection";
import SeasonalBannerSection from "@/components/home/SeasonalBannerSection";
import DailyRitualsSection from "@/components/home/DailyRitualsSection";
import WhyShopSpaceSection from "@/components/home/WhyShopSpaceSection";

// =============================================================================
// TEMPORARY PREVIEW DATA
// -----------------------------------------------------------------------------
// Engineering exercise for the developer:
// Replace this static preview array with Next.js Server Component data fetching,
// caching strategies (e.g., fetch with revalidation, tags, or Route Handlers).
// =============================================================================
const PREVIEW_FEATURED_PRODUCTS: Product[] = [
  {
    id: "6",
    title: "Calvin Klein CK One",
    description: "A fragrance bottle for your daily collection.",
    price: 2400,
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    stock: 7,
  },
  {
    id: "7",
    title: "Chanel Coco Noir",
    description: "A fragrance presented in a dark glass bottle.",
    price: 7200,
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    stock: 4,
  },
  {
    id: "8",
    title: "Dior J'adore",
    description: "A fragrance in a decorative gold-toned bottle.",
    price: 6800,
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    stock: 0,
  },
  {
    id: "10",
    title: "Gucci Bloom",
    description: "A fragrance presented in a soft pink bottle.",
    price: 5600,
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    stock: 6,
  },
  {
    id: "11",
    title: "Wooden Double Bed",
    description: "A wooden bed frame for a spacious bedroom.",
    price: 28500,
    category: "furniture",
    image:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    stock: 3,
  },
  {
    id: "12",
    title: "Classic Accent Sofa",
    description: "An upholstered sofa for a living room or reading space.",
    price: 32000,
    category: "furniture",
    image:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    stock: 2,
  },
];

const PREVIEW_RITUAL_PRODUCTS: Product[] = [
  {
    id: "27",
    title: "Pure Honey",
    description: "A jar of honey for toast, drinks, and desserts.",
    price: 180,
    category: "groceries",
    image:
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    stock: 17,
  },
  {
    id: "16",
    title: "Fresh Apples",
    description: "A portion of apples for snacks and fruit bowls.",
    price: 85,
    category: "groceries",
    image:
      "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    stock: 45,
  },
  {
    id: "20",
    title: "Cooking Oil",
    description: "Bottled cooking oil for everyday kitchen use.",
    price: 95,
    category: "groceries",
    image:
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    stock: 35,
  },
  {
    id: "29",
    title: "Fresh Fruit Juice",
    description: "Bottled juice to serve chilled.",
    price: 55,
    category: "groceries",
    image:
      "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    stock: 40,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero mosaic with floating accent card */}
      <HeroSection />

      {/* 2. Four category disciplines */}
      <CategoriesSection />

      {/* 3. Featured archive (6 products) */}
      <FeaturedArchiveSection products={PREVIEW_FEATURED_PRODUCTS} />

      {/* 4. Seasonal promotional banner */}
      <SeasonalBannerSection />

      {/* 5. Daily rituals (4 products) */}
      <DailyRitualsSection products={PREVIEW_RITUAL_PRODUCTS} />

      {/* 6. Why ShopSpace (three brand integrity pillars) */}
      <WhyShopSpaceSection />
    </div>
  );
}
