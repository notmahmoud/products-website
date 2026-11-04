import { useId, useState } from "react";
import Button from "@mui/material/Button";
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
      <Button
        type="button"
        size="small"
        color="inherit"
        aria-haspopup="dialog"
        aria-expanded={testAccountsOpen}
        aria-controls={testAccountsOpen ? popoverId : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className="underline underline-offset-4"
      >
        View test accounts
      </Button>

      <Popover
        id={popoverId}
        open={testAccountsOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <section
          role="dialog"
          aria-label="Demo login accounts"
          className="w-64 max-w-[calc(100vw-32px)] p-5"
        >
          <h3 className="font-serif text-xl">Test accounts</h3>

          <p className="mt-2 text-xs leading-5 text-[#75695e]">
            Public demo credentials. Do not enter your personal password.
          </p>

          <div className="mt-4 space-y-4">
            {testAccounts.map((account) => (
              <div
                key={account.username}
                className="border-t border-[#d9d0c3] pt-3 text-sm"
              >
                <p>
                  Username: <code>{account.username}</code>
                </p>
                <p className="mt-1">
                  Password: <code>{account.password}</code>
                </p>
              </div>
            ))}
          </div>

          <Button
            type="button"
            size="small"
            onClick={() => setAnchorEl(null)}
            className="mt-4"
          >
            Close
          </Button>
        </section>
      </Popover>
    </>
  );
}
