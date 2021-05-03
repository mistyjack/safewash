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
      minHeight: "600px",
      [theme.breakpoints.up("md")]: {
        background: "url('https://ik.imagekit.io/7wpxe2myx/Safewash/slide4_Muj-r9lNseG.png') top center no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        height: "772px"
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
      zIndex: 10,
      padding: theme.spacing(3)
    },
    fourthSlide: {
      position: "absolute",
      right: 0,
      top: 0,
      overflow: "hidden",
      maxWidth: "100%"
    }
  })
);

const FourthSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
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

      {!matches && (
        <Fragment>
          <div className={classes.fourthSlide}>
            <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/fourthSlideSmallScreen_8MrB4y7Ag.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={375} height={317} />
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
              bottom: "11rem",
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

export default FourthSlide;
