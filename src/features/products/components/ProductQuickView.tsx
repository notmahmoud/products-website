import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import type { Product } from "../product.types";

type ProductQuickViewProps = {
  selectedProduct: Product | null;
  quickViewOpen: boolean;
  handleCloseQuickView: () => void;
};

export default function ProductQuickView({
  selectedProduct,
  quickViewOpen,
  handleCloseQuickView,
}: ProductQuickViewProps) {
  return (
    <Dialog
      open={quickViewOpen}
      onClose={handleCloseQuickView}
      aria-labelledby="quick-view-title"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="quick-view-title" className="font-serif text-3xl">
        {selectedProduct?.title ?? "Product details"}
      </DialogTitle>

      <DialogContent>
        {selectedProduct && (
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="aspect-square bg-[#eae4d9] p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center py-2">
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#75695e]">
                {selectedProduct.category}
              </p>

              <p className="text-2xl">
                {new Intl.NumberFormat("en-EG", {
                  style: "currency",
                  currency: "EGP",
                  maximumFractionDigits: 0,
                }).format(selectedProduct.price)}
              </p>

              <p className="mt-5 text-sm leading-7 text-[#75695e]">
                {selectedProduct.description}
              </p>

              <p className="mt-5 text-sm">
                {selectedProduct.stock > 0
                  ? `${selectedProduct.stock} available`
                  : "Currently out of stock"}
              </p>
            </div>
          </div>
        )}
      </DialogContent>

      <DialogActions className="px-6 pb-6">
        <Button variant="outlined" onClick={handleCloseQuickView}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
