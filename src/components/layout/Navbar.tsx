import Link from "next/link";
import NavbarActions from "@/components/layout/NavbarActions";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-variant">
      <div className="max-w-[1380px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-20 flex items-center justify-between gap-space-md">

        {/* Part 1: Brand Wordmark — static, Server Component */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          <Link href="/" className="flex items-center gap-space-sm">
            <img
              alt="ShopSpace Brand Wordmark"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UuqceHxkOe-GnJsTilejQs-AY6vU9mj5eoH6QsL4YqGShQIklwxa_5iksFkSOUwdrTB3BsFMGW1qFSzIF3GqdyoZLvV2Ov0kBi0T1MmR1ZzOExpGNMoq1LRRjqhbYBiBEAADa7s4NIKCf9fjVdykHfTfIofpD03jVHD7N1-uS4UfE25H8vh2WqCkj9zmdY1s7eqB4FAj37kSFp0b6jVeLE0I51giVDbf2kPGcFf0Q"
            />
            <span className="font-headline-md text-headline-md text-primary tracking-tight">
              ShopSpace
            </span>
          </Link>
        </div>

        {/* Part 2: Center Navigation — static, Server Component */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-gutter"
        >
          <Link
            href="/"
            className="py-space-xs transition-colors text-primary border-b-2 border-primary font-title-md"
          >
            Home
          </Link>

        </nav>

        {/* Part 3: Interactive controls — Client Component boundary */}
        <NavbarActions />

      </div>
    </header>
  );
}
