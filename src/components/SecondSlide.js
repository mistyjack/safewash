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
    SecondSlide: {
      minHeight: "670px",
      background: "linear-gradient(212.16deg, rgba(254, 150, 198, 0.7) 10.33%, rgba(254, 150, 198, 0.7) 31.35%, rgba(255, 255, 255, 0) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      opacity: "0.5",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      [theme.breakpoints.up("md")]: {
        minHeight: "100vh",
        height: "801px",
        background: "linear-gradient(212.16deg, rgba(254, 150, 198, 0.8) 10.33%, rgba(254, 150, 198, 0.8) 31.35%, rgba(255, 255, 255, 0) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
        transform: "matrix(-1, 0, 0, 1, 0, 0)",
        opacity: "0.5"
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
      maxWidth: 678,
      marginBottom: "40px"
    },
    textContent: {
      position: "absolute",
      bottom: "0",
      transform: "translateY(-50%)",
      [theme.breakpoints.up("md")]: {
        right: "1rem"
      },
      zIndex: 10,
      padding: theme.spacing(2)
    },
    babyImage: {
      position: "absolute",
      left: 0,
      bottom: 0,
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        transform: "scale(0.7)",
        transformOrigin: "bottom left"
      }
    },
    babySmallImage: {
      position: "absolute",
      right: 0,
      top: 0,
      overflow: "hidden"
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
    mdCircle1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        bottom: "1.5rem",
        right: "6.4rem"
      }
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
        top: "30%",
        left: "6rem"
      },
      bottom: "11rem",
      left: "1rem"
    },
    smallRec1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "22.2rem",
        left: "50%"
      },
      top: "8rem",
      left: "1rem"
    },
    smallRec2: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "45%",
        right: "30%"
      },
      bottom: "13rem",
      right: "3rem"
    },
    smallRec3: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "2rem",
        right: "34%"
      }
    },
    backgroundImg: {
      position: "absolute",
      right: 0,
      bottom: 0
    }
  })
);

const SecondSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
      <CssBaseline />
      <div className={classes.SecondSlide} />

      <div className={classes.textContent}>
        <Typography className={classes.stylishHeading} variant="h1" gutterBottom>
          Mild and Gentle On Your Baby’s Soft Skin
        </Typography>
        <Typography className={classes.blockHeading} variant="h1" gutterBottom>
          Happy Fragrance
        </Typography>
        <Button className="btn" variant="contained" color="secondary" disableElevation>
          Find Distributors Around You?
        </Button>
      </div>

      <span className={classes.mdCircle}>{IconPack.circle}</span>
      <span className={classes.rec}>{IconPack.mdRec}</span>
      <span className={classes.smallRec1}>{IconPack.smallRec}</span>
      <span className={classes.smallRec2}>{IconPack.smallRec}</span>
      <span className={classes.mdCircle1}>{IconPack.circle}</span>

      {matches ? (
        <Fragment>
          <div className={classes.babyImage}>
            <Image src="/images/mildGentle.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={829} height={825} />
          </div>
          <div className={classes.backgroundImg}>
            <Image src="/images/backgroundImg.png" alt="Background Image" layout="fixed" width={501} height={604} />
          </div>
          <span className={classes.smallRec3}>{IconPack.smallRec}</span>
          <span className={classes.mdRec}>{IconPack.mdRec}</span>
        </Fragment>
      ) : (
        <Fragment>
          <div className={classes.babySmallImage}>
            <Image src="/images/mildSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={375} height={372} />
          </div>
          <span className={classes.smCircle}>{IconPack.smallCircle}</span>
        </Fragment>
      )}
    </section>
  );
};

export default SecondSlide;
