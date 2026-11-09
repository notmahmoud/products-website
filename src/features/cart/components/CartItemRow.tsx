import { useId } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { CartItem } from "../cart.types";

type CartItemRowProps = {
  cartItem: CartItem;
  handleSetQuantity: (productId: string, quantity: number) => void;
  handleRemoveItem: (productId: string) => void;
};

export default function CartItemRow({
  cartItem,
  handleSetQuantity,
  handleRemoveItem,
}: CartItemRowProps) {
  const quantityLabelId = useId();

  const quantityOptions = Array.from(
    { length: cartItem.product.stock },
    (_, index) => index + 1,
  );

  return (
    <article className="flex gap-4 border-b border-outline-variant py-6">
      <div className="h-24 w-24 shrink-0 bg-surface-container p-2">
        <img
          src={cartItem.product.image}
          alt={cartItem.product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg leading-6 text-on-surface">
          {cartItem.product.title}
        </h3>

        <p className="mt-2 text-sm text-on-surface-variant">
          {new Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP",
            maximumFractionDigits: 0,
          }).format(cartItem.product.price)}
          {" / item"}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <FormControl
            size="small"
            className="w-28"
            disabled={cartItem.product.stock <= 0}
          >
            <InputLabel id={quantityLabelId}>Quantity</InputLabel>

            <Select
              labelId={quantityLabelId}
              label="Quantity"
              value={String(cartItem.quantity)}
              onChange={(event) =>
                handleSetQuantity(
                  cartItem.product.id,
                  Number(event.target.value),
                )
              }
            >
              {quantityOptions.map((quantity) => (
                <MenuItem key={quantity} value={String(quantity)}>
                  {quantity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            color="inherit"
            size="small"
            className="min-w-0 underline underline-offset-4 text-on-surface-variant hover:text-error"
            onClick={() => handleRemoveItem(cartItem.product.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </article>
  );
}
