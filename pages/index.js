import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FirstSlide from "../src/components/FirstSlide";
import SecondSlide from "../src/components/SecondSlide";

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
        <SecondSlide />

        <Hidden mdUp>
          <div className={classes.babyInBasketImage}>
            <Image src="/images/babyInBasket.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={575} height={566} />
          </div>
        </Hidden>
      </main>
    </Fragment>
  );
}
