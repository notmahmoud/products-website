import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#233120",
      light: "#394735",
      dark: "#121f0f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#58623e",
      light: "#dce8ba",
      dark: "#414a29",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fbfaf0",
      paper: "#ffffff",
    },
    text: {
      primary: "#1b1c17",
      secondary: "#444841",
    },
    divider: "#e4e3da",
    error: {
      main: "#ba1a1a",
      contrastText: "#ffffff",
    },
  },

  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"EB Garamond", serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"EB Garamond", serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"EB Garamond", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 50px rgba(35, 49, 32, 0.18)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#233120",
          },
        },
      },
    },
  },
});
