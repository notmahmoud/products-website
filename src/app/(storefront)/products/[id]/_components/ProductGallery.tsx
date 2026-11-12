import type { Product } from "@/features/products/product.types";
import Image from "next/image";
type ProductGalleryProps = {
  product: Product;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="lg:col-span-7 flex flex-col gap-space-md">
      {/* Main Feature Presentation Card */}
      <div className="relative w-full aspect-4/2 bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex items-center justify-center group">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-105"
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
          <Image
            src={product.image}
            alt={`${product.title} perspective`}
            fill
            sizes="(max-width: 1024px) 33vw, 15vw"
            className="object-contain p-2"
          />
        </div>
        <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden shadow-sm opacity-80 p-2">
          <Image
            src={product.image}
            alt={`${product.title} perspective`}
            fill
            sizes="(max-width: 1024px) 33vw, 15vw"
            className="object-contain p-2"
          />
        </div>
        <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden shadow-sm opacity-80 p-2">
          <Image
            src={product.image}
            alt={`${product.title} perspective`}
            fill
            sizes="(max-width: 1024px) 33vw, 15vw"
            className="object-contain p-2"
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
          Selected for our curated collection to enrich daily living spaces with
          honest utility, balanced proportions, and quiet endurance.
        </p>
      </div>
    </div>
  );
}
