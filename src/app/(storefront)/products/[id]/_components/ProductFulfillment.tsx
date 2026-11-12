export default function ProductFulfillment() {
  return (
    <div className="bg-surface-container-low/70 rounded-xl p-space-md space-y-space-md">
      <div className="flex items-start gap-space-md">
        <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
          <span className="material-symbols-outlined text-[18px]">
            inventory_2
          </span>
        </div>
        <div>
          <h3 className="font-title-md text-title-md text-primary leading-snug">
            Careful Protection Wrap
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Dispatched in protective, recyclable packaging with secure handling.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-space-md">
        <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
          <span className="material-symbols-outlined text-[18px]">
            change_circle
          </span>
        </div>
        <div>
          <h3 className="font-title-md text-title-md text-primary leading-snug">
            Considered Return Policy
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            14-day return privilege on sealed items in original condition.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-space-md">
        <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
          <span className="material-symbols-outlined text-[18px]">
            verified
          </span>
        </div>
        <div>
          <h3 className="font-title-md text-title-md text-primary leading-snug">
            Authentic Curation
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Verified quality sourced directly for honest daily utility.
          </p>
        </div>
      </div>
    </div>
  );
}
