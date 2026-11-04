import { useId, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
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

  const [customQuantityOpen, setCustomQuantityOpen] = useState(false);
  const [quantityText, setQuantityText] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const quantityOptions = Array.from(
    //options length either 10 or the stock number
    { length: Math.min(10, cartItem.product.stock) },
    (_, index) => index + 1,
  );

  const selectedQuantity =
    customQuantityOpen || cartItem.quantity > 10
      ? "custom"
      : String(cartItem.quantity);

  return (
    <article className="flex gap-4 border-b border-[#d9d0c3] py-6">
      <div className="h-24 w-24 shrink-0 bg-[#eae4d9] p-2">
        <img
          src={cartItem.product.image}
          alt={cartItem.product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-lg leading-6">
          {cartItem.product.title}
        </h3>

        <p className="mt-2 text-sm text-[#75695e]">
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
            className="w-36"
            disabled={cartItem.product.stock <= 0}
          >
            <InputLabel id={quantityLabelId}>Quantity</InputLabel>

            <Select
              labelId={quantityLabelId}
              label="Quantity"
              value={selectedQuantity}
              onChange={(event) => {
                const value = event.target.value;

                setQuantityError("");

                if (value === "custom") {
                  setQuantityText(String(cartItem.quantity));
                  setCustomQuantityOpen(true);
                  return;
                }

                setCustomQuantityOpen(false);
                handleSetQuantity(cartItem.product.id, Number(value));
              }}
            >
              {quantityOptions.map((quantity) => (
                <MenuItem key={quantity} value={String(quantity)}>
                  {quantity}
                </MenuItem>
              ))}

              {cartItem.product.stock > 10 && (
                <MenuItem value="custom">
                  {customQuantityOpen
                    ? "Custom quantity…"
                    : `${cartItem.quantity} — Custom…`}
                </MenuItem>
              )}
            </Select>
          </FormControl>

          <Button
            color="inherit"
            size="small"
            className="min-w-0 underline underline-offset-4"
            onClick={() => handleRemoveItem(cartItem.product.id)}
          >
            Remove
          </Button>
        </div>

        {customQuantityOpen && (
          <form
            className="mt-4 flex flex-wrap items-start gap-2"
            onSubmit={(event) => {
              event.preventDefault();

              const quantity = Number(quantityText);

              if (
                !Number.isInteger(quantity) ||
                quantity < 1 ||
                quantity > cartItem.product.stock
              ) {
                setQuantityError(
                  `Enter a whole number from 1 to ${cartItem.product.stock}.`,
                );
                return;
              }

              handleSetQuantity(cartItem.product.id, quantity);
              setCustomQuantityOpen(false);
              setQuantityError("");
            }}
          >
            <TextField
              label="Custom quantity"
              type="number"
              size="small"
              value={quantityText}
              onChange={(event) => {
                setQuantityText(event.target.value);
                setQuantityError("");
              }}
              error={quantityError !== ""}
              helperText={
                quantityError || `Available: ${cartItem.product.stock}`
              }
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: cartItem.product.stock,
                  step: 1,
                },
              }}
              className="w-40"
            />

            <Button type="submit" variant="outlined">
              Apply
            </Button>

            <Button
              type="button"
              color="inherit"
              onClick={() => {
                setCustomQuantityOpen(false);
                setQuantityError("");
              }}
            >
              Cancel
            </Button>
          </form>
        )}
      </div>
    </article>
  );
}
