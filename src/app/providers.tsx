"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import { makeStore } from "@/lib/redux/store";
import { theme } from "@/lib/mui/theme";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
