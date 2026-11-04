import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import CartItemRow from "./CartItemRow";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
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
        className="flex h-full w-screen max-w-md flex-col bg-[#f5f1e8] text-[#3b302a]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-[#d9d0c3] px-6 py-5">
          <h2 id="cart-heading" className="font-serif text-3xl">
            Your cart
          </h2>

          <Button color="inherit" onClick={handleCloseCart} className="min-w-0">
            Close
          </Button>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
          {items.length === 0 ? (
            <>
              <svg
                width="88"
                height="88"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mb-5 text-[#75695e]"
              >
                <path d="M3 3h2l2.4 12h11.8L21 7H6" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              <span className="sr-only">Your cart is empty.</span>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#75695e]">
                Add something you like!
              </p>
              <Button
                variant="outlined"
                onClick={handleCloseCart}
                className="mt-6 px-6 py-2"
              >
                Continue shopping
              </Button>
            </>
          ) : (
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
          )}
        </div>
      </section>
    </Drawer>
  );
}
