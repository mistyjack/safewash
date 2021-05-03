import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "600px",
      [theme.breakpoints.up("md")]: {
        background: "url('https://ik.imagekit.io/7wpxe2myx/Safewash/slide3_BTG2lVerp.png') top center no-repeat",
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
        marginBottom: 80
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
      marginBottom: 80
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
    babyImageSmallScreen: {
      position: "absolute",
      zIndex: 1,
      right: "0",
      top: "2rem",
      overflow: "hidden"
    }
  })
);

const ThirdSlide = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <section className={classes.container}>
      <CssBaseline />
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

      {!matches && (
        <div className={classes.babyImageSmallScreen}>
          <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/thirdBaby_77_qVbeZD.png" alt="Third baby" layout="fixed" width={254} height={373} />
        </div>
      )}
    </section>
  );
};

export default ThirdSlide;
