import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
      marginBottom: "30px",
      fontSize: "14px",
      lineHeight: "28px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "16px",
        lineHeight: "33px"
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
            <Typography className={classes.bodyText} variant="h6" component="h4">
              Imagine having an healthy baby and you had to be admitted back in the hospital few days after birth due escalated skin irritation(Dermititis) as a result of poorly formulated laundry soap used. This is our founder case with her son in 2019. As devastated as she was, with her background as a pharmacolgist she formulated bqsafewash. Helped over 50 homes during test stage and commercialized after 0ne year.
            </Typography>
          </Zoom>
          <Zoom>
            <Button className="btn" variant="contained" color="secondary" disableElevation>
              Contact Us Now!
            </Button>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ContactUs;
