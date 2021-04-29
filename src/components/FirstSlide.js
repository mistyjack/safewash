import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "670px",
      [theme.breakpoints.up("md")]: {
        background: "url('https://imgur.com/gH8zFTO') top center no-repeat",
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
    }
  })
);

const FirstSlide = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
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
    </section>
  );
};

export default FirstSlide;
