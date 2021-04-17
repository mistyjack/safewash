import "../styles/globals.css";
import Header from "../src/components/Header";
import { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../src/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
