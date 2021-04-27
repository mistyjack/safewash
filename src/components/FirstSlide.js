import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Fragment } from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: "relative"
    },
    firstSlide: {
      minHeight: "600px",
      [theme.breakpoints.up("md")]: {
        minHeight: "100vh",
        height: "801px",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
        opacity: "0.5",
        transform: "matrix(-1, 0, 0, 1, 0, 0)"
      }
    },
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
      position: "absolute",
      right: 0,
      bottom: 0,
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        transform: "scale(0.65)",
        transformOrigin: "bottom right"
      }
    },
    mdCircle: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "5rem",
        left: "5rem"
      },
      top: "5rem",
      left: "45%"
    },
    smCircle: {
      position: "absolute",
      top: "15rem",
      left: "50%"
    },
    mdRec: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: "1rem",
        right: "40%"
      }
    },
    rec: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "50%",
        left: "5rem"
      },
      bottom: "11rem",
      left: "1rem"
    },
    smallRec1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "21.5rem",
        left: "40rem"
      },
      top: "8rem",
      left: "1rem"
    },
    smallRec2: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        bottom: "12.7rem",
        left: "31rem"
      },
      bottom: "13rem",
      right: "3rem"
    },
    smallRec3: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "11.7rem",
        left: "43rem"
      }
    }
  })
);

const FirstSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
      <div className={classes.firstSlide} />
      <CssBaseline />

      <div className={classes.textContent}>
        <Typography className={classes.stylishHeading} variant="h1" gutterBottom>
          A Liquid Laundry Detergent Specifically Formulated for
        </Typography>
        <Typography className={classes.blockHeading} variant="h1" gutterBottom>
          Babies and Children Clothings
        </Typography>
        <Button className="btn" variant="contained" color="secondary" disableElevation>
          Find Distributors Around You?
        </Button>
      </div>

      <span className={classes.mdCircle}>
        <img src="/icons/circle.svg" alt="Background icon" />
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

      {matches ? (
        <Fragment>
          <div className={classes.babyImage}>
            <Image src="/images/baby.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={728} height={681} />
          </div>
          <span className={classes.smallRec3}>
            <img src="/icons/smallRec.svg" alt="Background icon" />
          </span>
          <span className={classes.mdRec}>
            <img src="/icons/mdRec.svg" alt="Background icon" />
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <span className={classes.smCircle}>
            <img src="/icons/smCircle.svg" alt="Background icon" />
          </span>
        </Fragment>
      )}
    </section>
  );
};

export default FirstSlide;
