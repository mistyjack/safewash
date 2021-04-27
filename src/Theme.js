import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FE96C6"
    },
    secondary: {
      main: "#6EB245"
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
      color: "#21A4C4",
      fontWeight: "bold",
      fontSize: "26px",
      lineHeight: "41.91px",
      textAlign: "center"
    },
    h4: {
      color: "#375497"
    },
    h5: {
      color: "#fb6542"
    },
    h6: {
      color: "#776E70",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "28px",
      textAlign: "center"
    },
    body1: {
      fontWeight: 600,
      lineHeight: "28px",
      fontSize: "14px",
      fontStyle: "normal",
      color: "#66334B"
    },
    body2: {
      fontWeight: 400,
      lineHeight: "24.5px",
      fontSize: "12px",
      fontStyle: "normal"
    }
  }
});

export default theme;
