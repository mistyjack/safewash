import "../styles/globals.css";
import "swiper/swiper.min.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../src/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
