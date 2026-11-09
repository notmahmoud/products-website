type CategoryItem = {
  number: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

const CATEGORIES: CategoryItem[] = [
  {
    number: "01",
    name: "Beauty",
    description:
      "Clean skincare, restorative botanical balms, and nutrient-dense raw oils.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoc1epEs9zrv4Mn4tygoz7TtNvdXJInQ5z1SbYwW86gu8Ww7VyuXvMiMuTjzDm4HtiNQjU8JRvZcbyvCF1XGPbDxSH5SvGaqSpnPEYiCfmUIfmZ7jhwX4UZott1IgCEHP1h8T3-xcEObGhtNuUQ54Ac7VjHcYSeMhBHxKOd6pVvWN06xoHR7eZdxiRQbsLT64mtvKgSGB7rAC-kKouQidACZtg63kuYzDyt6ryDdw",
    imageAlt: "Minimalist botanical skincare bottles and travertine pedestal",
  },
  {
    number: "02",
    name: "Furniture",
    description:
      "Minimalist oak furniture, raw linen seating, and functional architectural forms.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ACYU55lflBZeRCTnh8J2btDzKs5y94ixri74NuIHTGifvNRP2jWu_BwGkLkjz340OnTDWr_fnl4SVvdM13VeOPxcNCIbD_wrNTkJFhnG6mbpmJ8MsvjHX1s_MXleg-SztnYuVOySJlq7TkAqqLZZI6W8ZFjCMFVLAnTgGr67KgvhahodbdEduhgijTtOm6Y0OHpgewMLKufxqa5LyOYqkBFPnmKcFhdilx_H_uQ",
    imageAlt:
      "Solid white oak side table and linen stool in a Japandi interior",
  },
  {
    number: "03",
    name: "Groceries",
    description:
      "Artisanal pantry staples, stone-milled spices, single-estate matcha, and pure cold-pressed oils.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxofmK3oMEUy81lfVjl6kAvpEHAPrqGjEXezpIz-YL8btkiZdFicsH6IBBt0uyZohrSltah_pmYKOFgJ8vikaLjZoTUDbittHCeWm0bJyDguOVT_YREv9mtxW5wqLzeLyoBX5G6t9V5zs5wLxb0-CW-I4cgzlc5eOAaXX7Eo2ywEX3czhnMMjs_Ir73YumSm6YMugONsSkJExOMu0XqHPHaTbEzOjSpZebRYnp5NM",
    imageAlt:
      "Artisanal pantry provisions and cold-pressed oil in golden daylight",
  },
  {
    number: "04",
    name: "Fragrances",
    description:
      "Artisan ambient perfumes, hand-rolled incense cones, and botanical cedar room sprays.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRd2cVFKdash99j51sZpX-lyzBAQmN3mBr26TPmClp41xSm6u2U6HKZskWyUlSrGylW548YTf6azZkGwzvNL9LKlp9YKq5wiojS7vAEfyM49KFKGkcKgGpY_XoZgiLicT5Dr39yt2Ki38ReiK_SJBV2pQiWTIEXA6GebTaklKjYMfneyhqpD8j1oKtk6GDF13k8gOGEOdD6dvjQ4g0s-2XeLVvjYEYoKrln5KOd1w",
    imageAlt: "Smoked glass perfume flacon and incense bowl on dark wood",
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-24"
      id="categories"
      max-w-345
    >
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
              Curation by Discipline
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Browse by Category
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Four distinct everyday spheres articulated with honest materials,
            quiet forms, and natural balance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {CATEGORIES.map((category) => (
            <article
              key={category.number}
              className="group flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-full aspect-4/5 overflow-hidden bg-surface-container relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt={category.imageAlt}
                  src={category.image}
                  loading="lazy"
                />
                <span className="absolute top-space-md left-space-md px-space-sm py-space-xs rounded bg-surface/90 backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-wider text-primary">
                  {category.number}
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between bg-surface">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {category.description}
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center text-primary font-title-md text-label-md gap-space-xs">
                  <span>View collection</span>
                  <span
                    className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
