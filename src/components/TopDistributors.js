import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconPack from "../../public/Icons";

import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      maxWidth: "967px",
      margin: theme.spacing(0, "auto"),
      position: "relative"
    },
    mb: {
      marginBottom: "126px"
    },
    mb34: {
      marginBottom: "34px !important",
      marginTop: "-45px"
    },
    headingTexts: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      maxWidth: "816px",
      padding: theme.spacing(0, 2),
      margin: theme.spacing(0, "auto"),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 6)
      }
    },
    heading: {
      [theme.breakpoints.up("md")]: {
        fontSize: "48px",
        lineHeight: "98px"
      }
    },
    bodyText: {
      marginBottom: "109px",
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "33px",
        marginBottom: "121px"
      }
    },
    item: {
      textAlign: "center",
      width: "280px",
      height: "360px",
      position: "relative",
      background: "#FFFFFF",
      boxShadow: "0px 4px 31px #F4F4F9",
      borderRadius: "12px",
      zIndex: 10
    },
    name: {
      color: theme.palette.secondary.main,
      fontSize: "16px",
      lineHeight: "32.67px",
      marginBottom: "12px",
      paddingTop: "176px"
    },
    address: {
      color: "#776E70",
      fontSize: "14px",
      lineHeight: "22.64px",
      marginBottom: "12px"
    },
    image: {
      position: "absolute",
      left: "40px",
      top: "-47px"
    },
    backgrd: {
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: 0,
      [theme.breakpoints.up("md")]: {
        top: "-12rem",
        left: "4rem",
        overflow: "hidden",
        maxWidth: "100% !important"
      }
    }
  })
);

const TopDistributors = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  const items = [
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/kudiratB_BjPy7UrJB.png", imageAlt: "Kudrat Bakare Passport", name: "Kudirat Bakare", address: "Surulere, Lagos State.", phone: "09030267295", style: "mb" },
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/ibikunleVentures_VZEzX-x19O7.png", imageAlt: "Ibikunle Ventures Passport", name: "Ibikunle Ventures", address: "Surulere, Lagos State.", phone: "09030267295", style: "mb" },
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/rosemerryShop_A8S6SjIajU.png", imageAlt: "Rosemerry’s Shop Passport", name: "Rosemerry’s Shop", address: "Surulere, Lagos State.", phone: "09030267295" }
  ];

  return (
    <div style={{ position: "relative" }}>
      <CssBaseline />
      <div className={classes.headingTexts}>
        <Zoom>
          <Typography className={classes.heading} variant="h3" component="h2">
            See Our Top Distributors
          </Typography>
        </Zoom>
        <Hidden smDown>
          <Zoom>
            <Typography className={classes.bodyText} variant="h6" component="h4">
              Because more homes have to experience mildness and purity in quality, we need you to join our team and as well be a business owner(money multiplier) of your own by showing the world what a great experience they can have using BQSAFEWASH.
            </Typography>
          </Zoom>
        </Hidden>
        <Hidden mdUp>
          <Zoom>
            <Typography className={classes.bodyText} variant="h6" component="h4">
              Because more homes have to experience mildness and purity in quality, we need you to join our team and as well be a business owner(money multiplier) of your own by showing the world what a great experience they can have using BQSAFEWASH.
            </Typography>
          </Zoom>
        </Hidden>
      </div>
      <span className={classes.backgrd}>
        <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/distBgrd_sQvnfOu2Axs.png" layout="intrinsic" width={1029} height={1109} alt="Distributors bgrd" />
      </span>
      <Grid className={classes.container} container direction="row" justify="space-around">
        {items.map(item => (
          <Grid key={item.imageAlt} item>
            <Paper className={item.style ? `${classes.item} ${classes.mb}` : classes.item} elevation={0}>
              <div className={classes.image}>
                <Image src={item.imageSrc} alt={item.imageAlt} layout="fixed" width={202} height={188} />
              </div>
              <Zoom>
                <Typography className={classes.name} variant="h4">
                  {item.name}
                </Typography>
              </Zoom>
              <Zoom>
                <Typography className={classes.address} variant="h5">
                  {item.address} <br /> {item.phone}
                </Typography>
              </Zoom>
              <Zoom>
                <Button className="btn btn--top-dist" variant="contained" color="secondary" disableElevation>
                  Contact
                </Button>
              </Zoom>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <div className={classes.headingTexts}>
        <Hidden smDown>
          <Zoom>
            <Typography className={`${classes.bodyText} ${classes.mb34}`} variant="h6" component="h4">
              We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap clinically safe for babies and children’s health.
            </Typography>
          </Zoom>

          <Zoom>
            <Button className="btn" variant="contained" color="secondary" disableElevation>
              Find Distributors Around You?
            </Button>
          </Zoom>
        </Hidden>
      </div>

      {!matches && (
        <Fragment>
          <span
            style={{
              position: "absolute",
              top: "-63px",
              left: "45%"
            }}
          >
            {IconPack.circle}
          </span>
          <span
            style={{
              position: "absolute",
              top: "-73.4px",
              left: "1rem"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "120px",
              right: "39.46px"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "40%",
              left: "21px"
            }}
          >
            {IconPack.mdRec}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "25%",
              right: "80px"
            }}
          >
            {IconPack.mdRec}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "25%",
              right: "41px"
            }}
          >
            {IconPack.smallRec}
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default TopDistributors;
