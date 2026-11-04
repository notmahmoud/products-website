import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";

type NavbarProps = {
  handleOpenCart: () => void;
  handleOpenLogin: () => void;
};
export default function Navbar({
  handleOpenCart,
  handleOpenLogin,
}: NavbarProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const totalQuantity = useAppSelector((state) =>
    state.cart.items.reduce((total, cartItem) => total + cartItem.quantity, 0),
  );

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      className="border-b border-[#d9d0c3]"
    >
      <Toolbar
        component="nav"
        aria-label="Main navigation"
        disableGutters
        className="mx-auto flex min-h-24 w-full max-w-7xl justify-between gap-4 px-5 sm:min-h-28 sm:px-10"
      >
        <a href="/" className="font-serif text-3xl tracking-tight sm:text-4xl">
          Products Store<span className="text-[#9a6148]"></span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            href="/"
            color="inherit"
            className="min-w-0 px-3 py-2 text-sm"
          >
            Shop
          </Button>

          <IconButton
            color="inherit"
            onClick={handleOpenCart}
            aria-label={`Open cart, ${totalQuantity} items`}
            className="p-3"
          >
            <Badge
              badgeContent={totalQuantity}
              showZero
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#3b302a",
                  color: "#fffaf3",
                  fontSize: "0.65rem",
                  minWidth: 18,
                  height: 18,
                },
              }}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 3h2l2.4 12h11.8L21 7H6" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </Badge>
          </IconButton>

          <span aria-hidden="true" className="h-6 w-px bg-[#d9d0c3]" />

          {user ? (
            <div className="flex items-center gap-2">
              <Avatar
                className="h-8 w-8 text-xs"
                sx={{
                  backgroundColor: "#eae4d9",
                  color: "#3b302a",
                }}
              >
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </Avatar>

              <Button
                color="inherit"
                size="small"
                onClick={handleLogout}
                className="min-w-0 px-2"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleOpenLogin}
              className="px-4 py-2 text-sm"
            >
              Sign in
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
