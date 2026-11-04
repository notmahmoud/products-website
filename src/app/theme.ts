import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#805238",
      contrastText: "#fffaf3",
    },
    background: {
      default: "#f5f1e8",
      paper: "#f5f1e8",
    },
    text: {
      primary: "#4a3429",
      secondary: "#75695e",
    },
    divider: "#d9d0c3",
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 0,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
