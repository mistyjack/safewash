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
      width: "150px",
      justifyContent: "space-between"
    },
    bodyText: {
      marginBottom: "15px",
      fontSize: "14px",
      lineHeight: "28px",
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "33px"
      }
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
            <Typography className={classes.bodyText} variant="body2" gutterBottom>
              <strong>Customer Service</strong>
            </Typography>
            <a href="#top-distributors">
              <Typography className={classes.bodyText} variant="body2">
                Become a Distributor
              </Typography>
            </a>
            <Typography className={classes.bodyText} variant="body2">
              Ordering and Payment
            </Typography>
            <Typography className={classes.bodyText} variant="body2">
              Returns
            </Typography>
            <Typography className={classes.bodyText} variant="body2">
              FAQS
            </Typography>
            <div style={{ cursor: "pointer" }} onClick={e => window.scroll(0, 0)}>
              <Typography className={classes.bodyText} variant="body2">
                Go to Top
              </Typography>
            </div>
          </Grid>
          <Grid className={classes.mb} xs={6} md={3} item>
            <Typography className={classes.bodyText} variant="body2" gutterBottom>
              <strong>Information</strong>
            </Typography>
            <a href="#about-us">
              <Typography className={classes.bodyText} variant="body2">
                About Safewash
              </Typography>
            </a>
            <a href="#contact-us">
              <Typography className={classes.bodyText} variant="body2">
                Work with Us
              </Typography>
            </a>
            <Typography className={classes.bodyText} variant="body2">
              Privacy Policy
            </Typography>
            <Typography className={classes.bodyText} variant="body2">
              Terms and Conditions
            </Typography>
          </Grid>
          <Grid className={`${classes.mbLarge} ${classes.contact}`} xs={6} md={3} item>
            <a href="#contact-us">
              <Typography className={classes.bodyText} variant="body2" gutterBottom>
                <strong>Contact Us</strong>
              </Typography>
            </a>
            <a href="tel:+2348094488997">
              <Typography className={classes.bodyText} variant="body2">
                0809 448 8997
              </Typography>
            </a>
            <a href="mailto:hello@bqglobalsolutions.com">
              <Typography className={classes.bodyText} variant="body2">
                hello@bqglobalsolutions.com
              </Typography>
            </a>

            <div className={classes.icons}>
              <a href="https://instagram.com/bqsafewash?igshid=1mytu9ow4oflm" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" aria-hidden="true">
                  Instagram profile
                </span>
                {IconPack.instagram}
              </a>
              <a href="https://www.facebook.com/bqsafewash?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" aria-hidden="true">
                  Faceook profile
                </span>
                {IconPack.facebook}
              </a>
              <a href="https://www.linkedin.com/company/bqsafewash" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" aria-hidden="true">
                  LinkedIn profile
                </span>
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
