import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Fragment } from "react";
import IconPack from "../../public/Icons";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "670px",
      [theme.breakpoints.up("md")]: {
        background: "url('/images/slide2.png') top center no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        height: "772px"
      }
    },
    secondSlide: {
      [theme.breakpoints.down("sm")]: {
        minHeight: "670px",
        background: "linear-gradient(212.16deg, rgba(254, 150, 198, 0.7) 10.33%, rgba(254, 150, 198, 0.7) 31.35%, rgba(255, 255, 255, 0) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
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
      padding: theme.spacing(3)
    },
    babySmallImage: {
      position: "absolute",
      right: 0,
      top: 0,
      overflow: "hidden"
    }
  })
);

const SecondSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
      <CssBaseline />
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

      {!matches && (
        <Fragment>
          <div className={classes.secondSlide} />
          <div className={classes.babySmallImage}>
            <Image src="/images/mildSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={375} height={372} />
          </div>
          <span
            style={{
              position: "absolute",
              top: "5rem",
              left: "45%"
            }}
          >
            {IconPack.circle}
          </span>
          <span
            style={{
              position: "absolute",
              top: "15rem",
              left: "50%"
            }}
          >
            {IconPack.smallCircle}
          </span>
          <span
            style={{
              position: "absolute",
              top: "8rem",
              left: "1rem"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "13rem",
              right: "3rem"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "13.3rem",
              left: "1rem"
            }}
          >
            {IconPack.mdRec}
          </span>
        </Fragment>
      )}
    </section>
  );
};

export default SecondSlide;
