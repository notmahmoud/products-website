/* eslint-disable react-refresh/only-export-components */
import Link from "next/link";
import type { Metadata } from "next";
import db from "../../../../db.json";

export const metadata: Metadata = {
  title: "Order Confirmation — ShopSpace",
  description: "Thank you for your order with ShopSpace.",
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function OrderConfirmationPage() {
  // Use two representative items from the catalog for visual template presentation
  const sampleItem1 = db.products[0]; // Calvin Klein CK One
  const sampleItem2 = db.products[1]; // Chanel Coco Noir
  const subtotal = sampleItem1.price + sampleItem2.price;

  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="relative w-full py-space-xl md:py-24 px-margin md:px-margin-tablet lg:px-margin-desktop overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-180 mx-auto flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="relative mb-space-lg flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary-container flex items-center justify-center shadow-sm">
            <span
              className="material-symbols-outlined text-primary text-[32px] md:text-[40px]"
              aria-hidden="true"
            >
              check
            </span>
          </div>
          <div className="absolute -inset-2 rounded-full border border-secondary-fixed-dim/40 animate-ping opacity-40 pointer-events-none"></div>
        </div>

        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.18em] mb-space-xs font-semibold">
          Order Confirmed
        </span>

        <h1 className="font-headline-lg text-headline-lg md:text-display text-primary tracking-tight mb-space-sm font-normal">
          Thank you for your order.
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-space-sm gap-y-1 mb-space-md text-on-surface-variant font-body-sm text-body-sm">
          <span className="font-title-md text-primary tracking-normal">
            Order Reference: #SSP-849204
          </span>
          <span className="text-outline-variant font-light">•</span>
          <span className="text-on-surface-variant">
            Placed on {todayFormatted}
          </span>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-140 leading-relaxed mx-auto mb-space-xl">
          A confirmation receipt has been dispatched. Your items are being
          carefully prepared with plastic-free, recyclable packaging.
        </p>

        {/* Order Details Card */}
        <div className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-[0_4px_24px_-4px_rgba(57,71,53,0.06)] overflow-hidden text-left mb-space-xl">
          <div className="bg-surface-container-low px-space-md md:px-space-lg py-space-md flex items-center justify-between border-b border-outline-variant/40">
            <h2 className="font-title-md text-title-md text-primary font-semibold">
              Summary of Dispatched Items
            </h2>
            <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-space-sm py-1 rounded font-medium">
              2 Essentials
            </span>
          </div>

          {/* Items List */}
          <div className="p-space-md md:p-space-lg space-y-space-md">
            {/* Item 1 */}
            <div className="flex items-center gap-space-md group">
              <div className="w-16 h-20 md:w-20 md:h-24 rounded-lg bg-surface-container-low overflow-hidden shrink-0 p-2 flex items-center justify-center">
                <img
                  src={sampleItem1.image}
                  alt={sampleItem1.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-0.5">
                      {sampleItem1.category}
                    </span>
                    <h3 className="font-title-md text-title-md text-primary truncate">
                      {sampleItem1.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Quantity: 1
                    </p>
                  </div>
                  <span className="font-numeral-price text-numeral-price text-primary font-semibold">
                    {priceFormatter.format(sampleItem1.price)}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-surface-container-high"></div>

            {/* Item 2 */}
            <div className="flex items-center gap-space-md group">
              <div className="w-16 h-20 md:w-20 md:h-24 rounded-lg bg-surface-container-low overflow-hidden shrink-0 p-2 flex items-center justify-center">
                <img
                  src={sampleItem2.image}
                  alt={sampleItem2.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-0.5">
                      {sampleItem2.category}
                    </span>
                    <h3 className="font-title-md text-title-md text-primary truncate">
                      {sampleItem2.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Quantity: 1
                    </p>
                  </div>
                  <span className="font-numeral-price text-numeral-price text-primary font-semibold">
                    {priceFormatter.format(sampleItem2.price)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Summary Breakdown */}
          <div className="bg-surface-container-low/70 px-space-md md:px-space-lg py-space-md space-y-space-xs border-t border-outline-variant/40">
            <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span className="font-numeral-price text-on-surface">
                {priceFormatter.format(subtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <span>Shipping</span>
                <span className="font-label-sm text-[10px] text-secondary bg-surface-container-highest px-1.5 py-0.5 rounded leading-none uppercase font-semibold">
                  Standard
                </span>
              </span>
              <span className="font-body-sm text-secondary font-medium">
                Complimentary
              </span>
            </div>
            <div className="h-px w-full bg-surface-container-high my-space-xs"></div>
            <div className="flex items-center justify-between">
              <span className="font-title-md text-title-md text-primary font-semibold">
                Total Paid
              </span>
              <div className="text-right">
                <span className="font-numeral-price text-headline-sm text-primary font-bold">
                  {priceFormatter.format(subtotal)}
                </span>
                <span className="font-label-sm text-[11px] text-outline block">
                  EGP • Taxes Included
                </span>
              </div>
            </div>
          </div>

          {/* Delivery & Dispatch Meta Boxes */}
          <div className="p-space-md md:p-space-lg bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2 gap-space-md border-t border-outline-variant/40">
            <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[18px]">
                    location_on
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Delivery Address
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  148 Franklin St, Apt 4B
                  <br />
                  Cairo, Egypt
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center gap-1.5 text-outline">
                <span className="material-symbols-outlined text-[14px]">
                  format_image_left
                </span>
                <span className="font-label-sm text-[11px]">
                  Contactless Hand-off
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[18px]">
                    eco
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Dispatch Estimate
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Estimated Delivery: 2–4 Business Days via Carbon-Neutral
                  Courier
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[14px]">
                  inventory_2
                </span>
                <span className="font-label-sm text-[11px]">
                  100% Recycled Post-Consumer Carton
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA: Continue Shopping */}
        <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary-container shadow-sm transition-all duration-200 group"
          >
            <span>Continue Shopping</span>
            <span
              className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-space-xl pt-space-md flex items-center justify-center gap-space-lg text-outline-variant">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              verified_user
            </span>
            <span>Payment Authenticated</span>
          </div>
          <span className="text-outline-variant">•</span>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              mail
            </span>
            <span>Receipt Dispatched</span>
          </div>
        </div>
      </div>
    </section>
  );
}
