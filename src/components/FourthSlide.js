import { Fragment } from "react";
import Image from "next/image";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      maxWidth: 678,
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
      maxWidth: 678,
      marginBottom: "100px"
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
      left: 0,
      bottom: 0,
      overflow: "hidden",
      maxWidth: "100%"
    },
    babyImageSmallScreen: {
      position: "absolute",
      right: 0,
      top: 0,
      overflow: "hidden",
      maxWidth: "100%"
    },
    mdCircle: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        bottom: "33%",
        left: "46%"
      },
      top: "5rem",
      left: "45%"
    },
    mdCircle1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        bottom: "1rem",
        right: "1rem"
      }
    },
    smCircle: {
      position: "absolute",
      top: "15rem",
      left: "50%",
      [theme.breakpoints.up("md")]: {
        top: "39%",
        left: "10%"
      }
    },
    rec: {
      position: "absolute",
      bottom: "11rem",
      left: "1rem"
    },
    mdRec: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: "19.7%",
        right: "44%"
      }
    },
    smallRec1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "25%",
        right: "13%"
      },
      top: "8rem",
      left: "1rem"
    },
    smallRec2: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "41%",
        left: "45%"
      },
      bottom: "13rem",
      right: "3rem"
    },
    smallRec3: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "14.4%",
        left: "35.5%"
      }
    }
  })
);

const FourthSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
      <div className={classes.firstSlide} />
      <CssBaseline />

      <div className={classes.textContent}>
        <Typography className={classes.stylishHeading} variant="h1" gutterBottom>
          Remove 99% Food and Tough Stains
        </Typography>
        <Typography className={classes.blockHeading} variant="h1" gutterBottom>
          Preserves Clothing Colors
        </Typography>
        <Button className="btn" variant="contained" color="secondary" disableElevation>
          Find Distributors Around You?
        </Button>
      </div>

      {/* <span className={classes.mdCircle}>{IconPack.circle}</span>
      <span className={classes.mdCircle1}>{IconPack.circle}</span>
      <span className={classes.smallRec1}>{IconPack.smallRec}</span>
      <span className={classes.smallRec2}>{IconPack.smallRec}</span>
      <span className={classes.smCircle}>{IconPack.smallCircle}</span> */}

      {matches ? (
        <Fragment>
          {/* <span className={classes.mdRec}>{IconPack.mdRec}</span>
          <span className={classes.smallRec3}>{IconPack.smallRec}</span> */}
          <div className={classes.babyImage}>
            <Image src="/images/fourthSlide.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={1321} height={751} />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {/* <span className={classes.rec}>{IconPack.mdRec}</span> */}
          <div className={classes.babyImageSmallScreen}>
            <Image src="/images/fourthSlideSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={375} height={317} />
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default FourthSlide;
