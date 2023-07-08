import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  palette: {
    primary: {
      main: "#BA2F1F",
    },
    secondary: {
      main: "#5D1810",
    },
    tertiary: {
      main: "#DFDFDF",
    },
  },
});

export default theme;
