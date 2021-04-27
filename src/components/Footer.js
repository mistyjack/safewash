import { Fragment } from "react";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme =>
  createStyles({
    mainContainer: {
      padding: theme.spacing("69px", "17px", "68px", "28px"),
      background: "rgba(184, 219, 217, 0.2)"
    },
    container: {
      maxWidth: "782px",
      margin: theme.spacing(0, "auto")
    },
    smallContainer: {
      textAlign: "center",
      backgroundColor: "#21A4C4;"
    },
    copyright: {
      fontFamily: "Gilroy",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "32.67px",
      color: "#fff",
      paddingTop: "13px",
      paddingBottom: "8px"
    },
    mb: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "56px"
      }
    },
    mbLarge: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "144px",
        overflow: "hidden"
      }
    },
    contact: {
      position: "relative"
    },
    icons: {
      marginTop: "10px",
      display: "flex",
      width: "156px",
      justifyContent: "space-between"
    }
  })
);

const Footer = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.mainContainer}>
        <Grid className={classes.container} container direction="row" justify="space-between">
          {matches ? (
            <Grid xs={6} md={3} item>
              <img src="/icons/global.svg" alt="Global Image" />
            </Grid>
          ) : null}
          <Grid className={classes.mb} xs={6} md={3} item>
            <Typography variant="body2" gutterBottom>
              <strong>Customer Service</strong>
            </Typography>
            <Typography variant="body2">Become a Distributor</Typography>
            <Typography variant="body2">Ordering and Payment</Typography>
            <Typography variant="body2">Returns</Typography>
            <Typography variant="body2">FAQS</Typography>
            <Typography variant="body2">Go to Top</Typography>
          </Grid>
          <Grid className={classes.mb} xs={6} md={3} item>
            <Typography variant="body2" gutterBottom>
              <strong>Information</strong>
            </Typography>
            <Typography variant="body2">About Safewash</Typography>
            <Typography variant="body2">Work with Us</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms and Conditions</Typography>
          </Grid>
          <Grid className={`${classes.mbLarge} ${classes.contact}`} xs={6} md={3} item>
            <Typography variant="body2" gutterBottom>
              <strong>Contact Us</strong>
            </Typography>
            <Typography variant="body2">+23456778889996</Typography>
            <Typography variant="body2">safewash@gmail.com</Typography>

            <div className={classes.icons}>
              {IconPack.instagram}
              {IconPack.twitter}
              {IconPack.facebook}
              {IconPack.linkedIn}
            </div>
          </Grid>
          {!matches ? (
            <Grid className={classes.mbLarge} xs={6} md={3} item>
              <img src="/icons/global.svg" alt="Global Image" />
            </Grid>
          ) : null}
        </Grid>
      </div>
      <div className={classes.smallContainer}>
        <Typography className={classes.copyright} variant="body1">
          &#169; bqsafewash 2021
        </Typography>
      </div>
    </Fragment>
  );
};

export default Footer;
