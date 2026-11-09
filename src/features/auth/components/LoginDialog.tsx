"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import type { LoginCredentials } from "../auth.types";
import TestAccountsPopover from "./TestAccountsPopover";

type LoginDialogProps = {
  loginOpen: boolean;
  handleCloseLogin: () => void;
  handleLogin: (credentials: LoginCredentials) => void;
  loginLoading: boolean;
  loginError: string | null;
};

export default function LoginDialog({
  loginOpen,
  handleCloseLogin,
  handleLogin,
  loginLoading,
  loginError,
}: LoginDialogProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Dialog
      open={loginOpen}
      onClose={handleCloseLogin}
      aria-labelledby="login-dialog-title"
      fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "var(--radius-xl, 0.75rem)",
            backgroundColor: "var(--color-surface-container-lowest, #ffffff)",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(35, 49, 32, 0.18)",
            margin: { xs: 2, sm: 3 },
          },
        },
      }}
    >
      <DialogContent sx={{ padding: { xs: "1.5rem", sm: "2rem" } }}>
        <div className="relative">
          {/* Close Button ("✕") */}
          <button
            type="button"
            aria-label="Close dialog"
            onClick={handleCloseLogin}
            className="absolute -top-2 -right-2 w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Dialog Header */}
          <div className="flex flex-col items-center text-center mb-space-lg">
            {/* Brand Emblem */}
            <div className="flex items-center gap-space-xs mb-space-xs">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[16px]">
                  all_inclusive
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                ShopSpace
              </span>
            </div>

            <h2
              id="login-dialog-title"
              className="font-headline-md text-headline-md text-primary font-medium tracking-tight"
            >
              Welcome to ShopSpace
            </h2>

            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-space-xs">
              Sign in using a demo account to explore the account experience.
            </p>
          </div>

          {/* Sign-In Form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin({
                username: username.trim(),
                password,
              });
            }}
            className="space-y-space-md"
          >
            {loginError && (
              <Alert
                severity="error"
                sx={{
                  backgroundColor: "var(--color-error-container)",
                  color: "var(--color-on-error-container)",
                  borderRadius: "var(--radius-lg, 0.5rem)",
                }}
              >
                {loginError}
              </Alert>
            )}

            {/* Username Input */}
            <div className="space-y-space-xs">
              <label
                htmlFor="login-username"
                className="block font-label-md text-label-md text-primary"
              >
                Username
              </label>
              <div className="relative">
                <input
                  id="login-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  disabled={loginLoading}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="e.g. emilys"
                  className="w-full bg-surface-container-low border border-outline-variant text-primary font-body-md text-body-md px-space-md py-2.5 rounded-lg shadow-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-space-xs">
              <label
                htmlFor="login-password"
                className="block font-label-md text-label-md text-primary"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="login-password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  disabled={loginLoading}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-surface-container-low border border-outline-variant text-primary font-body-md text-body-md px-space-md py-2.5 pr-10 rounded-lg shadow-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  aria-label={passwordVisible ? "Hide password" : "Show password"}
                  className="absolute right-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {passwordVisible ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={loginLoading || username.trim() === "" || password === ""}
              className="w-full flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-title-md text-title-md py-space-sm px-space-lg rounded-lg shadow-sm transition-all duration-200 mt-space-sm cursor-pointer"
            >
              {loginLoading ? (
                <>
                  <CircularProgress size={18} color="inherit" className="mr-2" />
                  <span>Signing in…</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <span className="font-title-md" aria-hidden="true">
                    →
                  </span>
                </>
              )}
            </button>

            {/* Test Accounts Popover Trigger */}
            <div className="border-t border-outline-variant pt-space-sm flex justify-center">
              <TestAccountsPopover />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
