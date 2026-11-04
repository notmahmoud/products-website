export default function Footer() {
  return (
    <footer className="border-t border-[#d9d0c3] bg-[#ebe5da]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <a href="/" className="font-serif text-3xl tracking-tight">
            ShopSpace.
          </a>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#75695e]">
            A considered collection for everyday living.
          </p>
        </div>

        <p className="text-xs leading-relaxed text-[#75695e]">
          © {new Date().getFullYear()} ShopSpace.
        </p>
      </div>
    </footer>
  );
}
