import GlobalStyles from "@mui/material/GlobalStyles";
import { createTheme, SxProps } from "@mui/material/styles";

export const globalStyles = (
  <GlobalStyles
    styles={{
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        display: "none",
      },
    }}
  />
);

export const theme = createTheme({
  components: {
    MuiSnackbar: {
      styleOverrides: {
        root: {
          top: "124px !important",
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
        },
      },
    },
  },
});

export const buttonSxProps: SxProps = {
  marginTop: "8px",
  marginBottom: "8px",
  background: "var(--key-bg-correct)",
  ":hover": {
    background: "var(--key-bg-correct)",
    opacity: 0.9,
  },
  color: "var(--key-evaluated-text-color)",
  fontWeight: "bold",
  letterSpacing: 0,
};
