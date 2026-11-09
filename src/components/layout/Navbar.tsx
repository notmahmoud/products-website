import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/layout/NavLinks";
import NavbarActions from "@/components/layout/NavbarActions";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-variant">
      <div className="max-w-345 mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-20 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md shrink-0">
          <Link href="/" className="flex items-center gap-space-sm group">
            <Image
              src="/logo.svg"
              alt="ShopSpace Logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-headline-md text-headline-md text-primary tracking-tight">
              ShopSpace
            </span>
          </Link>
        </div>

        {/* Nav Links — tiny Client Component for active state only */}
        <NavLinks />

        {/* Interactive controls — Client Component */}
        <NavbarActions />
      </div>
    </header>
  );
}
