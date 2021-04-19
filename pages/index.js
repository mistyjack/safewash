import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FirstSlide from "../src/components/FirstSlide";

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
    },
    babyInBasketImage: {
      padding: theme.spacing(0, 3),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(0, 6)
      }
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
            <FirstSlide />
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
            <FirstSlide />
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
            <FirstSlide />
          </Carousel>
        </Hidden>

        <Hidden mdUp>
          <div className={classes.babyInBasketImage}>
            <Image src="/images/babyInBasket.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={575} height={566} />
          </div>
        </Hidden>
      </main>
    </Fragment>
  );
}
