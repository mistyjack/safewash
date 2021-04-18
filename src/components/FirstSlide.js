import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme =>
  createStyles({
    stylishHeading: {
      fontSize: 50,
      [theme.breakpoints.down("sm")]: {
        fontSize: 35,
        lineHeight: "48px",
        maxWidth: 600
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 26,
        lineHeight: "36px",
        maxWidth: 330
      },
      lineHeight: "70.5px",
      fontStyle: "normal",
      fontFamily: "Cocon",
      fontWeight: 700,
      maxWidth: 701,
      color: theme.palette.primary.main
    },
    blockHeading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 33,
        lineHeight: "42px",
        maxWidth: 400
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 22,
        lineHeight: "34px",
        maxWidth: 240,
        marginTop: 24,
        marginBottom: 42
      },
      color: theme.palette.primary.main,
      WebkitTextFillColor: "transparent",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: theme.palette.primary.main,
      fontSize: 48,
      lineHeight: "70.5px",
      fontStyle: "normal",
      fontWeight: "bold",
      maxWidth: 678
    },
    textContent: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [theme.breakpoints.up("md")]: {
        left: "10.1rem"
      },
      [theme.breakpoints.down("sm")]: {
        left: "2rem"
      },
      [theme.breakpoints.down("xs")]: {
        left: 0
      },
      zIndex: 10,
      padding: theme.spacing(2)
    },
    babyImage: {
      height: "100vh",
      zIndex: 0,
      position: "absolute",
      right: 0,
      top: 0,
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        top: 0,
        transform: "scale(0.65)",
        transformOrigin: "bottom right"
      }
    },
    mdCircle: {
      position: "absolute",
      top: "5rem",
      left: "5rem"
    },
    mdRec: {
      position: "absolute",
      top: "1rem",
      right: "40%"
    },
    rec: {
      position: "absolute",
      top: "50%",
      left: "5rem"
    },
    smallRec1: {
      position: "absolute",
      top: "21.5rem",
      left: "40rem"
    },
    smallRec2: {
      position: "absolute",
      bottom: "12.7rem",
      left: "31rem"
    },
    smallRec3: {
      position: "absolute",
      bottom: "11.7rem",
      left: "43rem"
    }
  })
);

const FirstSlide = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <span className={classes.mdCircle}>
        <img src="/icons/circle.svg" alt="Background icon" />
      </span>
      <span className={classes.mdRec}>
        <img src="/icons/mdRec.svg" alt="Background icon" />
      </span>
      <span className={classes.rec}>
        <img src="/icons/rec.svg" alt="Background icon" />
      </span>
      <span className={classes.smallRec1}>
        <img src="/icons/smallRec.svg" alt="Background icon" />
      </span>
      <span className={classes.smallRec2}>
        <img src="/icons/smallRec.svg" alt="Background icon" />
      </span>
      <span className={classes.smallRec3}>
        <img src="/icons/smallRec.svg" alt="Background icon" />
      </span>
      <div className={classes.textContent}>
        <Typography className={classes.stylishHeading} variant="h1" gutterBottom>
          A Liquid Laundry Detargent Specifically Formulated for
        </Typography>
        <Typography className={classes.blockHeading} variant="h1" gutterBottom>
          Babies and Children Clothings
        </Typography>
        <Button className="btn" variant="contained" color="secondary" disableElevation>
          Find Distributors Around You?
        </Button>
      </div>

      <Hidden xsDown>
        <div className={classes.babyImage}>
          <Image src="/images/baby.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={914} height={1033} />
        </div>
      </Hidden>
    </Fragment>
  );
};

export default FirstSlide;
