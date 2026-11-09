import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import CartItemRow from "./CartItemRow";

import { useAppSelector, useAppDispatch } from "../../../lib/redux/hooks";
import { setQuantity, removeItem } from "../cartSlice";

type CartDrawerProps = {
  cartOpen: boolean;
  handleCloseCart: () => void;
};

export default function CartDrawer({
  cartOpen,
  handleCloseCart,
}: CartDrawerProps) {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0,
  );

  function handleSetQuantity(productId: string, quantity: number) {
    dispatch(setQuantity({ productId, quantity }));
  }
  function handleRemoveItem(productId: string) {
    dispatch(removeItem(productId));
  }

  return (
    <Drawer anchor="right" open={cartOpen} onClose={handleCloseCart}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
        className="flex h-full w-screen max-w-md flex-col bg-surface-container-low text-on-surface"
      >
        {/* Drawer header */}
        <header className="flex items-center justify-between gap-4 border-b border-outline-variant px-6 py-5">
          <h2 id="cart-heading" className="font-display text-3xl text-primary">
            Your cart
          </h2>

          <button
            type="button"
            onClick={handleCloseCart}
            aria-label="Close cart"
            className="flex items-center justify-center w-9 h-9 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </header>

        {/* Drawer body */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
              <span
                className="material-symbols-outlined text-[88px] text-on-surface-variant mb-5"
                aria-hidden="true"
              >
                shopping_bag
              </span>
              <span className="sr-only">Your cart is empty.</span>
              <p className="mt-3 max-w-xs text-sm leading-6 text-on-surface-variant">
                Add something you like!
              </p>
              <Button
                variant="outlined"
                onClick={handleCloseCart}
                className="mt-6 px-6 py-2"
              >
                Continue shopping
              </Button>
            </div>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto px-6">
                {items.map((cartItem) => (
                  <li key={cartItem.product.id}>
                    <CartItemRow
                      cartItem={cartItem}
                      handleSetQuantity={handleSetQuantity}
                      handleRemoveItem={handleRemoveItem}
                    />
                  </li>
                ))}
              </ul>

              {/* Pinned subtotal / checkout footer */}
              <div className="border-t border-outline-variant px-6 py-5 bg-surface-container-low">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-on-surface-variant">Subtotal</span>
                  <span className="font-semibold text-on-surface">
                    {new Intl.NumberFormat("en-EG", {
                      style: "currency",
                      currency: "EGP",
                      maximumFractionDigits: 0,
                    }).format(subtotal)}
                  </span>
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  disableElevation
                  sx={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-on-primary)",
                    borderRadius: "var(--radius-full)",
                    paddingY: "0.75rem",
                    fontFamily: "inherit",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--color-primary-container)" },
                  }}
                >
                  Checkout
                </Button>
                <p className="mt-3 text-center text-xs text-on-surface-variant">
                  Shipping calculated at checkout.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </Drawer>
  );
}
