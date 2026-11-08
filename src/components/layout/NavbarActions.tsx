"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { logout } from "@/features/auth/authSlice";
import { login } from "@/features/auth/authSlice";
import CartDrawer from "@/features/cart/components/CartDrawer";
import LoginDialog from "@/features/auth/components/LoginDialog";
import type { LoginCredentials } from "@/features/auth/auth.types";

export default function NavbarActions() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const loginLoading = useAppSelector((state) => state.auth.status === "loading");
  const loginError = useAppSelector((state) => state.auth.error);

  const totalQuantity = useAppSelector((state) =>
    state.cart.items.reduce((total, cartItem) => total + cartItem.quantity, 0),
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  function handleLogout() {
    dispatch(logout());
  }

  async function handleLogin(credentials: LoginCredentials) {
    try {
      await dispatch(login(credentials)).unwrap();
      setLoginOpen(false);
    } catch {
      // The rejected reducer stores the error message for the dialog to display.
    }
  }

  return (
    <>
      <div className="flex items-center gap-space-md flex-1 max-w-xs justify-end">
        {/* Authentication State & Trigger */}
        {user ? (
          <div className="flex items-center gap-space-xs">
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary text-[13px] font-semibold overflow-hidden shadow-sm"
              title={`${user.firstName} ${user.lastName}`}
            >
              {user.image ? (
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>
                  {user.firstName?.charAt(0)}
                  {user.lastName?.charAt(0)}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="hidden sm:inline-flex text-label-md font-title-md text-on-surface-variant hover:text-primary transition-colors py-1 px-2 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-space-xs">
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="hidden sm:flex items-center gap-space-xs font-title-md text-label-md text-primary hover:text-on-surface transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                account_circle
              </span>
              <span>Sign In</span>
            </button>
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              aria-label="Sign in"
              className="sm:hidden w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
            </button>
          </div>
        )}

        {/* Shopping Cart Button */}
        <button
          type="button"
          aria-label={`Open shopping cart, ${totalQuantity} items`}
          onClick={() => setCartOpen(true)}
          className="relative flex items-center justify-center p-space-xs text-primary hover:text-on-surface transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">
            shopping_bag
          </span>
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] bg-secondary text-on-secondary rounded-full font-label-sm text-[10px] px-1 font-semibold leading-none">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>

      {/* Dialogs & Drawers — rendered at this boundary to stay within the Client Component */}
      <CartDrawer
        cartOpen={cartOpen}
        handleCloseCart={() => setCartOpen(false)}
      />
      <LoginDialog
        loginOpen={loginOpen}
        handleCloseLogin={() => setLoginOpen(false)}
        handleLogin={handleLogin}
        loginLoading={loginLoading}
        loginError={loginError}
      />
    </>
  );
}

