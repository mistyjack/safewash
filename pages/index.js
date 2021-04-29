import Head from "next/head";
import { Fragment } from "react";
import FirstSlide from "../src/components/FirstSlide";
import SecondSlide from "../src/components/SecondSlide";
import ThirdSlide from "../src/components/ThirdSlide";
import FourthSlide from "../src/components/FourthSlide";
import NotableFeatures from "../src/components/NotableFeatures";
import AboutUs from "../src/components/AboutUs";
import TopDistributors from "../src/components/TopDistributors";
import ContactUs from "../src/components/ContactUs";
import Testimonies from "../src/components/Testimonies";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "react-material-ui-carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    featureSection: {
      zIndex: 10,
      backgroundColor: "#fff"
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const mdUp = useMediaQuery("(min-width:960px)");
  const smUp = useMediaQuery("(min-width:600px)");

  return (
    <Fragment>
      <CssBaseline />
      <Head>
        <title>Safewash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.root}>
        {/* Main landing section begins */}
        <section>
          <Carousel
            indicatorContainerProps={{
              style: {
                position: "absolute",
                bottom: "10rem",
                textAlign: "left",
                marginLeft: "11rem"
              }
            }}
            indicatorIconButtonProps={{
              style: {
                color: "transparent",
                border: "1px solid #FE96C6",
                marginRight: "5px"
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#FE96C6",
                backgroundColor: "#FE96C6"
              }
            }}
          >
            <p>Abdullah</p>
            <p>Sulaiman</p>
            <p>Maryam</p>
            <p>Rofiat</p>
          </Carousel>
        </section>
        {/* End of main landing section */}

        {/* Notable features section begins */}
        <section>
          <NotableFeatures />
        </section>
        {/* End of notable features section */}

        {/* About us section begins */}
        <section>
          <AboutUs />
        </section>
        {/* End of About us section */}

        {/* Top distributors section begins */}
        <section>
          <TopDistributors />
        </section>
        {/* End of Top distributors section */}

        {/* Contact us section begins */}
        <section>
          <ContactUs />
        </section>
        {/* End of Contact us section */}

        {/* Testimonies section begins */}
        <section>
          <Testimonies />
        </section>
        {/* End of Testimonies section */}
      </main>
    </Fragment>
  );
}
