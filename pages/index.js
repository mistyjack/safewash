import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FirstSlide from "../src/components/FirstSlide";
import SecondSlide from "../src/components/SecondSlide";
import ThirdSlide from "../src/components/ThirdSlide";
import FourthSlide from "../src/components/FourthSlide";
import NotableFeatures from "../src/components/NotableFeatures";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Carousel from "react-material-ui-carousel";

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
          <Hidden smDown>
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
              <FirstSlide />
              <SecondSlide />
              <ThirdSlide />
              <FourthSlide />
            </Carousel>
          </Hidden>

          <Hidden xsDown mdUp>
            <Carousel
              indicatorContainerProps={{
                style: {
                  position: "absolute",
                  bottom: "7rem",
                  textAlign: "left",
                  marginLeft: "3rem"
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
              <FirstSlide />
              <SecondSlide />
              <ThirdSlide />
              <FourthSlide />
            </Carousel>
          </Hidden>

          <Hidden smUp>
            <Carousel
              indicatorContainerProps={{
                style: {
                  position: "absolute",
                  bottom: "6rem",
                  textAlign: "left",
                  marginLeft: "1rem"
                }
              }}
              indicatorIconButtonProps={{
                style: {
                  color: "transparent",
                  border: "1px solid #FE96C6",
                  marginRight: "5px",
                  fontSize: "10px"
                }
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#FE96C6",
                  backgroundColor: "#FE96C6",
                  fontSize: "10px"
                }
              }}
            >
              <FirstSlide />
              <SecondSlide />
              <ThirdSlide />
              <FourthSlide />
            </Carousel>
          </Hidden>
        </section>
        {/* End of main landing section */}

        {/* Notable features section begins */}
        <section>
          <NotableFeatures />
        </section>
        {/* End of notable features section */}
      </main>
    </Fragment>
  );
}
