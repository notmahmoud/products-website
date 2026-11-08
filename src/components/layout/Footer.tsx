import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      {/* Main footer columns */}
      <div className="mx-auto max-w-[1380px] px-margin md:px-margin-tablet lg:px-margin-desktop py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight text-primary"
            >
              ShopSpace
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              A considered collection for everyday living.
            </p>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Explore
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-on-surface hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-on-surface hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-on-surface-variant cursor-default">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-on-surface-variant cursor-default">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Connect
            </p>
            <div className="flex items-center gap-space-sm">
              <div
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </div>
              <div
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[20px]">push_pin</span>
              </div>
              <div
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Colophon bar */}
      <div className="border-t border-outline-variant">
        <div className="mx-auto max-w-[1380px] px-margin md:px-margin-tablet lg:px-margin-desktop py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} ShopSpace. All rights reserved.
          </p>
          <p className="text-xs text-on-surface-variant">
            Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
