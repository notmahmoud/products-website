import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
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
      aria-labelledby="login-heading"
      fullWidth
      maxWidth="xs"
    >
      <div className="flex items-center justify-between px-6 pt-5">
        <p className="text-xs uppercase tracking-[0.16em] text-[#75695e]">
          Your account
        </p>

        <Button type="button" color="inherit" onClick={handleCloseLogin}>
          Close
        </Button>
      </div>

      <DialogTitle id="login-heading" className="font-serif text-4xl">
        Welcome back.
      </DialogTitle>

      <DialogContent>
        <p className="mb-6 text-sm leading-6 text-[#75695e]">
          Sign in using a demo account to explore the account experience.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            handleLogin({
              username: username.trim(),
              password,
            });
          }}
          className="flex flex-col gap-5"
        >
          {loginError && <Alert severity="error">{loginError}</Alert>}

          <TextField
            label="Username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            disabled={loginLoading}
            required
            fullWidth
          />

          <div>
            <TextField
              label="Password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loginLoading}
              required
              fullWidth
            />

            <Button
              type="button"
              size="small"
              color="inherit"
              aria-pressed={passwordVisible}
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="mt-1"
            >
              {passwordVisible ? "Hide password" : "Show password"}
            </Button>
          </div>

          <Button
            type="submit"
            variant="contained"
            disabled={loginLoading || username.trim() === "" || password === ""}
            className="min-h-12"
          >
            {loginLoading ? (
              <>
                <CircularProgress size={16} color="inherit" className="mr-2" />
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </Button>

          <div className="border-t border-[#d9d0c3] pt-3">
            <TestAccountsPopover />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
