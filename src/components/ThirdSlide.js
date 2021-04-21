import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: "relative"
    },
    thirdSlide: {
      minHeight: "600px",
      [theme.breakpoints.up("md")]: {
        minHeight: "100vh",
        height: "801px",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(146.99deg, rgba(255, 255, 255, 0.5) 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
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
        maxWidth: 230
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
      marginBottom: 117
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
      zIndex: 10,
      right: "7rem",
      top: 0,
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        transform: "scale(0.65)",
        transformOrigin: "bottom right"
      }
    },
    babyImageSmallScreen: {
      position: "absolute",
      zIndex: 1,
      right: "0",
      top: 0,
      overflow: "hidden"
    },
    babyImageBorder: {
      position: "absolute",
      zIndex: 0,
      right: "0",
      top: "6rem",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        transform: "scale(0.65)",
        transformOrigin: "bottom right"
      }
    },
    babyImageBorderSmallScreen: {
      position: "absolute",
      zIndex: 0,
      right: "0",
      top: "6rem",
      overflow: "hidden"
    },
    mdCircle: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        bottom: "33%",
        left: "46%"
      }
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
      left: "50%"
    },
    mdRec: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: "1rem",
        right: "33%"
      }
    },
    rec: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "50%",
        left: "5rem"
      }
    },
    smallRec1: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "25%",
        right: "13%"
      }
    },
    smallRec2: {
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "41%",
        left: "45%"
      }
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

const ThirdSlide = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.thirdSlide} />
      <CssBaseline />
      <span className={classes.mdCircle}>
        <img src="/icons/circle.svg" alt="Background icon" />
      </span>
      <span className={classes.mdCircle1}>
        <img src="/icons/circle.svg" alt="Background icon" />
      </span>
      <Hidden smDown>
        <span className={classes.mdRec}>
          <img src="/icons/mdRec.svg" alt="Background icon" />
        </span>
      </Hidden>
      <span className={classes.rec}>
        <img src="/icons/rec.svg" alt="Background icon" />
      </span>
      <span className={classes.smallRec1}>
        <img src="/icons/smallRec.svg" alt="Background icon" />
      </span>
      <span className={classes.smallRec2}>
        <img src="/icons/smallRec.svg" alt="Background icon" />
      </span>
      <Hidden smDown>
        <span className={classes.smallRec3}>
          <img src="/icons/smallRec.svg" alt="Background icon" />
        </span>
      </Hidden>
      <div className={classes.textContent}>
        <Typography className={classes.stylishHeading} variant="h1" gutterBottom>
          Keeps Your Baby Smiling All Day
        </Typography>
        <Typography className={classes.blockHeading} variant="h1" gutterBottom>
          Zero Skin Irritations
        </Typography>
        <Button className="btn" variant="contained" color="secondary" disableElevation>
          Become A Distributor
        </Button>
      </div>

      <Hidden smDown>
        <div className={classes.babyImage}>
          <Image src="/images/thirdBaby.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={560} height={731} />
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classes.babyImageSmallScreen}>
          <Image src="/images/thirdBabySmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={254} height={373} />
        </div>
      </Hidden>

      <Hidden smDown>
        <div className={classes.babyImageBorder}>
          <Image src="/images/border.svg" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={735} height={673} />
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classes.babyImageBorderSmallScreen}>
          <Image src="/images/borderSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={204} height={248} />
        </div>
      </Hidden>
    </section>
  );
};

export default ThirdSlide;
