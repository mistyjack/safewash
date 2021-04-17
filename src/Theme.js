import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a2b3dd",
      main: "#375497",
      dark: "#22345d"
    },
    secondary: {
      light: "#fc9982",
      main: "#fb6542",
      dark: "#af2404"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h3: {
      color: "#fb6542"
    },
    h4: {
      color: "#375497"
    },
    h5: {
      color: "#fb6542"
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.65,
      fontSize: "1.225rem"
    },
    body2: {
      fontWeight: 300
    }
  }
});

export default theme;
