/* eslint-disable react-refresh/only-export-components */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import db from "../../../../../db.json";
import type { Product } from "@/features/products/product.types";
import ProductPurchaseActions from "@/features/products/components/ProductPurchaseActions";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export function generateStaticParams() {
  return db.products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = db.products.find((p) => String(p.id) === id);

  if (!product) {
    return {
      title: "Product Not Found — ShopSpace",
    };
  }

  return {
    title: `${product.title} — ShopSpace`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = db.products.find((p) => String(p.id) === id);

  if (!product) {
    notFound();
  }

  // Related products: prefer same category, fill up to 4 items
  const categoryComplements = db.products.filter(
    (p) => String(p.id) !== id && p.category === product.category,
  );
  const otherComplements = db.products.filter(
    (p) => String(p.id) !== id && p.category !== product.category,
  );
  const relatedProducts: Product[] = [
    ...categoryComplements,
    ...otherComplements,
  ].slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      {/* Top Breadcrumbs & Catalogue Index */}
      <section className="max-w-345 w-full mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant capitalize">
              {product.category}
            </span>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold truncate max-w-50 sm:max-w-none">
              {product.title}
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>CATALOGUE ENTRY: #{product.id}</span>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="max-w-345ll mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md lg:py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Left Column: Gallery & Showcase (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Main Feature Presentation Card */}
            <div className="relative w-full aspect-4/5 bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded font-label-sm text-label-sm text-primary uppercase tracking-widest">
                {product.category}
              </div>
              {product.stock <= 0 && (
                <div className="absolute top-4 right-4 bg-error-container text-on-error-container px-3 py-1 rounded font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                  Sold out
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  photo_camera
                </span>
                <span>Original Archive Item</span>
              </div>
            </div>

            {/* Thumbnail Showcase Strip */}
            <div className="grid grid-cols-3 gap-gutter">
              <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden shadow-sm ring-2 ring-primary p-2">
                <img
                  src={product.image}
                  alt={`${product.title} perspective`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden shadow-sm opacity-80 p-2">
                <img
                  src={product.image}
                  alt={`${product.title} detail`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden shadow-sm opacity-80 p-2">
                <img
                  src={product.image}
                  alt={`${product.title} scale`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Narrative Card */}
            <div className="bg-surface-container-low rounded-xl p-space-lg mt-space-md">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  spa
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Material &amp; Craft Focus
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Selected for our curated collection to enrich daily living
                spaces with honest utility, balanced proportions, and quiet
                endurance.
              </p>
            </div>
          </div>

          {/* Right Column: Purchase & Details Panel (5 Cols Desktop) */}
          <div className="lg:col-span-5 flex flex-col pt-space-xs lg:pl-space-md">
            {/* Header Meta */}
            <div className="flex items-center justify-between pb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                {product.category} Archive
              </span>
              <span className="font-label-sm text-label-sm text-outline tracking-wider">
                SKU #SS-{product.id.padStart(4, "0")}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="font-headline-lg text-headline-lg text-primary leading-tight mt-1 mb-space-sm">
              {product.title}
            </h1>

            {/* Price & Stock Status Row */}
            <div className="flex items-baseline justify-between py-space-sm mb-space-md bg-surface-container-low px-space-md rounded-lg">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-numeral-price text-[26px] text-primary font-semibold">
                  {priceFormatter.format(product.price)}
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-container bg-secondary-fixed/50 px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-medium">
                  {product.stock > 0
                    ? `In Stock (${product.stock} available)`
                    : "Currently Sold Out"}
                </span>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg">
              {product.description}
            </p>

            {/* Technical Specifications Table */}
            <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-space-md shadow-sm mb-space-lg">
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-space-sm font-semibold">
                Item Specifications
              </h2>
              <dl className="space-y-space-xs font-body-sm text-body-sm">
                <div className="flex justify-between py-1.5 bg-surface-container-low/40 px-2 rounded">
                  <dt className="text-on-surface-variant font-medium">
                    Category
                  </dt>
                  <dd className="text-primary font-semibold capitalize">
                    {product.category}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 px-2">
                  <dt className="text-on-surface-variant font-medium">
                    Item ID
                  </dt>
                  <dd className="text-primary font-semibold">#{product.id}</dd>
                </div>
                <div className="flex justify-between py-1.5 bg-surface-container-low/40 px-2 rounded">
                  <dt className="text-on-surface-variant font-medium">
                    Stock Status
                  </dt>
                  <dd className="text-primary font-semibold">
                    {product.stock > 0
                      ? `${product.stock} units`
                      : "Out of stock"}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 px-2">
                  <dt className="text-on-surface-variant font-medium">
                    Currency
                  </dt>
                  <dd className="text-primary font-semibold">EGP</dd>
                </div>
              </dl>
            </div>

            {/* Purchase Actions: Counter + CTA (Client Component Boundary) */}
            <ProductPurchaseActions product={product} />

            {/* Fulfillment Highlights */}
            <div className="bg-surface-container-low/70 rounded-xl p-space-md space-y-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    inventory_2
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-primary leading-snug">
                    Careful Protection Wrap
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Dispatched in protective, recyclable packaging with secure
                    handling.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-md">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    change_circle
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-primary leading-snug">
                    Considered Return Policy
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    14-day return privilege on sealed items in original
                    condition.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-md">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-primary leading-snug">
                    Authentic Curation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Verified quality sourced directly for honest daily utility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complements This Ritual (Related Products Section) */}
      <section className="max-w-345 w-full mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-xl border-t border-outline-variant/60 mt-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Cohesive Regimen
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              Similar items
            </h2>
          </div>
          <Link
            href="/products"
            className="font-title-md text-label-md text-primary hover:text-secondary flex items-center gap-1 transition-colors"
          >
            <span>View All Curated Goods</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((item) => (
            <article
              key={item.id}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group transition-all duration-200 hover:-translate-y-1 h-full justify-between"
            >
              <div>
                <Link
                  href={`/products/${item.id}`}
                  className="w-full aspect-4/5 bg-surface-container-low overflow-hidden relative block"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                </Link>

                <div className="p-4 pb-2">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-title-md text-title-md text-primary line-clamp-1">
                    <Link
                      href={`/products/${item.id}`}
                      className="hover:text-secondary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="font-numeral-price text-numeral-price text-primary font-semibold">
                    {priceFormatter.format(item.price)}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-surface-variant/40">
                <Link
                  href={`/products/${item.id}`}
                  className="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary font-title-md text-label-md rounded-lg text-center transition-colors block"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
