"use client";

type ProductSearchProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  handleSearch: () => void;
};

export default function ProductSearch({
  searchText,
  setSearchText,
  handleSearch,
}: ProductSearchProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
      role="search"
      className="flex w-full gap-2 lg:max-w-md"
    >
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-xl px-space-md py-1.5 flex-1 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
        <span
          className="material-symbols-outlined text-outline text-[20px] mr-space-xs select-none"
          aria-hidden="true"
        >
          search
        </span>
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search products..."
          className="bg-transparent border-0 outline-none text-on-surface placeholder:text-outline font-body-sm text-body-sm w-full"
        />
      </div>

      <button
        type="submit"
        className="shrink-0 px-space-lg py-2 bg-primary text-on-primary font-title-md text-label-md rounded-xl hover:bg-primary-container transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
