const PILLARS = [
  {
    icon: "eco",
    title: "Quality Products",
    description:
      "Every item is vetted for durable craftsmanship and honest sustainable materials. We partner directly with independent kilns, family mills, and organic estates.",
    tag: "Traceable Origins",
  },
  {
    icon: "lock",
    title: "Secure Shopping",
    description:
      "Encrypted checkout and transparent order handling from start to finish. Zero hidden duties, fully carbon-offset parcel transit, and end-to-end telemetry tracking.",
    tag: "Protected Checkout",
  },
  {
    icon: "support_agent",
    title: "Customer Support",
    description:
      "Dedicated human team ready to assist with sizing, care guides, and inquiries. Reach our concierge specialists via chat or email for unhurried product counsel.",
    tag: "Direct Consultation",
  },
];

export default function WhyShopSpaceSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-xl mx-auto text-center mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
            Commitment to Integrity
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Why ShopSpace
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            We reject fast consumption in favor of quiet objects crafted with
            endurance, transparency, and attentive human care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="bg-surface p-space-xl rounded-xl shadow-sm flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-space-lg">
                <span
                  className="material-symbols-outlined text-[26px]"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <span>{pillar.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
