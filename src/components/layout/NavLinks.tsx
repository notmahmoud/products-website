"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-gutter">
      {links.map(({ href, label }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={
              isActive
                ? "py-space-xs transition-colors text-primary border-b-2 border-primary font-title-md"
                : "py-space-xs transition-colors text-on-surface-variant hover:text-primary font-body-md text-body-md"
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

