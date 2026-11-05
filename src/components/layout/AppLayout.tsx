import type { ReactNode } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../lib/redux/hooks";
import Navbar from "./Navbar";
import Footer from "./Footer";

import CartDrawer from "../../features/cart/components/CartDrawer";
import LoginDialog from "../../features/auth/components/LoginDialog";
import type { LoginCredentials } from "../../features/auth/auth.types";
import { login } from "../../features/auth/authSlice";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const dispatch = useAppDispatch();

  const loginLoading = useAppSelector(
    (state) => state.auth.status === "loading",
  );

  const loginError = useAppSelector((state) => state.auth.error);

  function handleOpenCart() {
    setCartOpen(true);
  }

  function handleCloseCart() {
    setCartOpen(false);
  }

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleCloseLogin() {
    setLoginOpen(false);
  }

  async function handleLogin(credentials: LoginCredentials) {
    try {
      await dispatch(login(credentials)).unwrap();
      handleCloseLogin();
    } catch {
      // The rejected reducer already saves the error for the UI.
    }
  }
  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f1e8] text-[#3b302a]">
      <Navbar
        handleOpenCart={handleOpenCart}
        handleOpenLogin={handleOpenLogin}
      />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-10 sm:py-14">
        {children}
      </main>

      <Footer />
      <CartDrawer handleCloseCart={handleCloseCart} cartOpen={cartOpen} />
      <LoginDialog
        loginOpen={loginOpen}
        handleCloseLogin={handleCloseLogin}
        handleLogin={handleLogin}
        loginLoading={loginLoading}
        loginError={loginError}
      />
    </div>
  );
}
