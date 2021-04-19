import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FirstSlide from "../src/components/FirstSlide";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    featureSection: {
      zIndex: 10,
      backgroundColor: "#fff"
    },
    firstSlide: {
      height: "600px",
      position: "relative",
      [theme.breakpoints.up("md")]: {
        height: "100vh",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)"
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
        <section className={classes.firstSlide}>
          <FirstSlide />
        </section>
        <Hidden smUp>
          <div className={classes.babyImage}>
            <Image src="/images/babyInBasket.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={400} height={408} />
          </div>
        </Hidden>
      </main>
    </Fragment>
  );
}
