import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import type { Product } from "../product.types";

import { useAppDispatch } from "../../../lib/redux/hooks";
import { addToCart } from "../../cart/cartSlice";

type ProductCardProps = {
  product: Product;
  handleQuickView: (product: Product) => void;
};

const priceFormatter = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

export default function ProductCard({
  product,
  handleQuickView,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <Card
      component="article"
      elevation={0}
      className="flex h-full flex-col overflow-visible bg-transparent"
    >
      <div className="group relative aspect-square overflow-hidden bg-[#eae4d9]">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-300 motion-safe:group-hover:scale-105"
        />

        {product.stock <= 0 && (
          <span className="absolute left-3 top-3 bg-[#f5f1e8] px-3 py-1 text-xs text-[#3b302a]">
            Sold out
          </span>
        )}
      </div>

      <CardContent className="flex-1 px-0 pb-3 pt-5">
        <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[#75695e]">
          {product.category}
        </p>

        <h2 className="mb-2 line-clamp-2 min-h-14 font-serif text-xl leading-7 text-[#3b302a]">
          {product.title}
        </h2>

        <p className="text-sm text-[#3b302a]">
          {priceFormatter.format(product.price)}
        </p>
      </CardContent>

      <CardActions disableSpacing className="gap-3 px-0 pb-0 pt-2">
        <Button
          variant="outlined"
          fullWidth
          className="px-2 py-2 text-xs"
          onClick={() => handleQuickView(product)}
        >
          Quick view
        </Button>

        <Button
          variant="contained"
          fullWidth
          disabled={product.stock <= 0}
          className="px-2 py-2 text-xs"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
