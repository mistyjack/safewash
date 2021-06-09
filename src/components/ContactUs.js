import { Fragment } from "react";
import Image from "next/image";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing("225px", 0),
      background: "url('https://ik.imagekit.io/7wpxe2myx/Safewash/reachOutBackground_-kxZ0cIUM.png') top center no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        padding: theme.spacing("150px", 0, "45px")
      }
    },
    womanImage: {
      maxWidth: "100%",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 4)
      }
    },
    heading: {
      color: "#795A69",
      fontSize: "26px",
      lineHeight: "42px",
      marginBottom: "16px",
      marginTop: "24px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "48px",
        lineHeight: "77px"
      }
    },
    textContent: {
      maxWidth: "660px",
      marginBottom: "30px",
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 2)
      }
    },
    bodyText: {
      marginBottom: "15px",
      fontSize: "14px",
      lineHeight: "28px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "16px",
        lineHeight: "33px"
      }
    },
    subHeading: {
      color: "#21A4C4",
      fontSize: "22px",
      lineHeight: "28px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "24px",
        lineHeight: "33px"
      }
    },
    icons: {
      marginBottom: "20px",
      display: "flex",
      width: "150px",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto 20px auto"
      }
    }
  })
);

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />

      <Grid className={classes.container} container direction="row" alignItems="center" justify="space-around">
        <Grid className={classes.womanImage} xs={12} md={5} item>
          <Hidden smDown>
            <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/reachOut_2lIHW-MXe.png" alt="About us Image" layout="responsive" width={560} height={553} />
          </Hidden>
          <Hidden mdUp>
            <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/reachOutSmall_8SQjmE4CkzG.png" alt="About us Image" layout="responsive" width={350} height={346} />
          </Hidden>
        </Grid>

        <Grid className={classes.textContent} xs={12} md={6} item>
          <Zoom>
            <Typography className={classes.heading} variant="h3" component="h2">
              Reach Out To Us
            </Typography>
          </Zoom>
          <Zoom>
            <Typography className={classes.subHeading} variant="h4" component="h3">
              <LocationOnIcon fontSize="small" /> Location
            </Typography>
            <Typography className={classes.bodyText} variant="h6" component="h4">
              73, college road, beside access bank, estate bus stop, college road, ogba Lagos
            </Typography>
          </Zoom>
          <Zoom>
            <Typography className={classes.subHeading} variant="h4" component="h3">
              <EmailIcon fontSize="small" /> Email
            </Typography>
            <a href="mailto:hello@bqglobalsolutions.com">
              <Typography className={classes.bodyText} variant="h6" component="h4">
                hello@bqglobalsolutions.com
              </Typography>
            </a>
          </Zoom>
          <Zoom>
            <Typography className={classes.subHeading} variant="h4" component="h3">
              <PhoneIcon fontSize="small" /> Phone
            </Typography>

            <Typography className={classes.bodyText} variant="h6" component="h4">
              <a href="tel:+2348094488997">0809 448 8997</a> / <a href="tel:+2348094488995">0809 448 8995</a>
            </Typography>
          </Zoom>
          <Zoom>
            <div className={classes.icons}>
              <a href="https://instagram.com/bqsafewash?igshid=1mytu9ow4oflm" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" aria-hidden="true">
                  Instagram profile
                </span>
                {IconPack.instagram}
              </a>
              <a href="https://www.facebook.com/bqsafewash?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <span className="material-icons" aria-hidden="true">
                  Facebook profile
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
          </Zoom>
          <Zoom>
            <a href="tel:+2348094488997">
              <Button className="btn" variant="contained" color="secondary" disableElevation>
                Contact Us Now!
              </Button>
            </a>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ContactUs;
