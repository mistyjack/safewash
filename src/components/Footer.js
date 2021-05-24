import { Fragment } from "react";
import Image from "next/image";
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
              <Image alt="Global image logo" height={57} layout="fixed" src="https://ik.imagekit.io/7wpxe2myx/Safewash/global_CSZGulErxV2.svg" width={150} />
            </Grid>
          ) : null}
          <Grid className={classes.mb} xs={6} md={3} item>
            <Typography variant="body2" gutterBottom>
              <strong>Customer Service</strong>
            </Typography>
            <a href="#top-distributors">
              <Typography variant="body2">Become a Distributor</Typography>
            </a>
            <Typography variant="body2">Ordering and Payment</Typography>
            <Typography variant="body2">Returns</Typography>
            <Typography variant="body2">FAQS</Typography>
            <div style={{ cursor: "pointer" }} onClick={e => window.scroll(0, 0)}>
              <Typography variant="body2">Go to Top</Typography>
            </div>
          </Grid>
          <Grid className={classes.mb} xs={6} md={3} item>
            <Typography variant="body2" gutterBottom>
              <strong>Information</strong>
            </Typography>
            <a href="#about-us">
              <Typography variant="body2">About Safewash</Typography>
            </a>
            <a href="#contact-us">
              <Typography variant="body2">Work with Us</Typography>
            </a>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms and Conditions</Typography>
          </Grid>
          <Grid className={`${classes.mbLarge} ${classes.contact}`} xs={6} md={3} item>
            <a href="#contact-us">
              <Typography variant="body2" gutterBottom>
                <strong>Contact Us</strong>
              </Typography>
            </a>
            <a href="tel:+23456778889996">
              <Typography variant="body2">+23456778889996</Typography>
            </a>
            <a href="mailto:safewash@gmail.com">
              <Typography variant="body2">safewash@gmail.com</Typography>
            </a>

            <div className={classes.icons}>
              <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                {IconPack.instagram}
              </a>
              <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                {IconPack.twitter}
              </a>
              <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                {IconPack.facebook}
              </a>
              <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                {IconPack.linkedIn}
              </a>
            </div>
          </Grid>
          {!matches ? (
            <Grid className={classes.mbLarge} xs={6} md={3} item>
              <Image alt="Global image logo" layout="fixed" height={57} src="https://ik.imagekit.io/7wpxe2myx/Safewash/global_CSZGulErxV2.svg" width={150} />
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
