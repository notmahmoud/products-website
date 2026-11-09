"use client";

import { useId, useState } from "react";
import Popover from "@mui/material/Popover";

const testAccounts = [
  { username: "emilys", password: "emilyspass" },
  { username: "michaelw", password: "michaelwpass" },
];

export default function TestAccountsPopover() {
  const popoverId = useId();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const testAccountsOpen = Boolean(anchorEl);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={testAccountsOpen}
        aria-controls={testAccountsOpen ? popoverId : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className="font-title-md text-label-md text-primary hover:text-secondary underline underline-offset-4 transition-colors cursor-pointer"
      >
        View test accounts
      </button>

      <Popover
        id={popoverId}
        open={testAccountsOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "var(--radius-lg, 0.5rem)",
              backgroundColor: "var(--color-surface-container-lowest, #ffffff)",
              boxShadow: "0 10px 30px rgba(35, 49, 32, 0.12)",
              marginTop: "0.5rem",
            },
          },
        }}
      >
        <section
          role="dialog"
          aria-label="Demo login accounts"
          className="w-72 max-w-[calc(100vw-32px)] p-space-md"
        >
          <div className="flex items-center justify-between mb-space-xs">
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Test accounts
            </h3>
            <button
              type="button"
              onClick={() => setAnchorEl(null)}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-0.5"
              aria-label="Close test accounts"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>

          <p className="text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            Public demo credentials. Do not enter your personal password.
          </p>

          <div className="space-y-space-sm">
            {testAccounts.map((account) => (
              <div
                key={account.username}
                className="bg-surface-container-low border border-outline-variant/60 rounded-lg p-space-sm text-body-sm"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-medium">Username:</span>
                  <code className="bg-surface-container px-1.5 py-0.5 rounded font-mono text-primary font-semibold">
                    {account.username}
                  </code>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Password:</span>
                  <code className="bg-surface-container px-1.5 py-0.5 rounded font-mono text-primary font-semibold">
                    {account.password}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Popover>
    </>
  );
}
