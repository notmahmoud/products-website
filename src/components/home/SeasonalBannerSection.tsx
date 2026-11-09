export default function SeasonalBannerSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="relative bg-surface-container-highest rounded-2xl overflow-hidden shadow-sm p-space-lg md:p-space-xl lg:p-14">
          {/* Subtle decorative backdrop graphics */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-tertiary-fixed/60 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-on-secondary mb-space-md">
                <span className="material-symbols-outlined text-[16px]">
                  eco
                </span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase">
                  Pledge &amp; Craft
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary max-w-xl tracking-tight leading-tight">
                Sustainable Packaging, Enduring Design
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm max-w-2xl leading-relaxed">
                All ShopSpace shipments arrive in 100% plastic-free, recyclable
                fiber packaging. Crafted with purpose, delivered with care.
              </p>

              {/* Highlights List */}
              <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center  shrink-0">
                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    Post-Consumer Pulp Molds
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    Soy-Based Non-Toxic Inks
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    Zero Synthetic Films
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card Column */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-space-lg bg-surface-container-lowest/80 backdrop-blur-md rounded-xl max-w-xs shadow-sm w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[32px]">
                    inventory_2
                  </span>
                  <div>
                    <span className="font-title-md text-title-md text-primary block">
                      Carbon Neutral
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Verified Logistics
                    </span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every dispatch is mapped to active reforestation projects
                  across the Pacific Northwest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
