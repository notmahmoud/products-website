export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface overflow-hidden py-space-xl lg:py-20">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col items-center text-center z-10 max-w-2xl mx-auto">
          <h1 className="font-display text-display text-primary tracking-tight mb-space-lg">
            Discover something new.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg mb-space-xl">
            Thoughtfully designed objects, nourishing essentials, and subtle
            fragrances created to enrich everyday spaces.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
            <a
              href="#featured"
              className="inline-flex items-center justify-center bg-primary text-on-primary font-title-md text-title-md px-space-xl py-space-md rounded-lg shadow-sm hover:bg-primary-container transition-colors duration-200"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center bg-surface-container text-primary font-title-md text-title-md px-space-lg py-space-md rounded-lg hover:bg-surface-container-high transition-colors duration-200"
            >
              Explore Curation
            </a>
          </div>

          {/* Micro Metas */}
          <div className="grid grid-cols-3 gap-space-lg mt-space-xl w-full max-w-md">
            <div>
              <p className="font-headline-md text-headline-md text-primary">
                100%
              </p>
              <p className="font-body-sm text-body-sm text-outline">
                Traceable Origin
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-primary">
                Japandi
              </p>
              <p className="font-body-sm text-body-sm text-outline">
                Tactile Design
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-primary">
                Carbon
              </p>
              <p className="font-body-sm text-body-sm text-outline">
                Neutral Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
