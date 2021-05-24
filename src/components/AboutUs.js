import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconPack from "../../public/Icons";

import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: theme.spacing("225px", 0),
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        padding: theme.spacing("150px", 0)
      }
    },
    womanImage: {
      maxWidth: "100%",
      overflow: "hidden",
      marginLeft: "auto",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 4)
      }
    },
    heading: {
      color: "#795A69",
      fontSize: "26px",
      lineHeight: "42px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "48px",
        lineHeight: "77px",
        marginBottom: "16px"
      }
    },
    textContent: {
      maxWidth: "660px",
      marginBottom: "30px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        paddingRight: 0,
        marginLeft: "auto"
      }
    },
    bodyText: {
      marginBottom: "30px",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "16px",
        lineHeight: "33px"
      }
    }
  })
);

const AboutUs = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <div style={{ position: "relative" }}>
      <CssBaseline />

      <Grid className={classes.container} container direction="row-reverse" alignItems="center" justify="space-between">
        <Grid className={classes.womanImage} xs={12} md={5} item>
          {matches ? <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/woman_-eSw1B5vkEX.png" alt="About us Image" layout="responsive" width={543} height={719} /> : <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/womanSmallScreen_EkS1TNQy1.png" alt="About us Image" layout="responsive" width={278} height={374} />}
        </Grid>

        <Grid className={classes.textContent} xs={12} md={7} item>
          <Zoom>
            <Typography className={classes.heading} variant="h3" component="h2">
              About Us
            </Typography>
          </Zoom>
          <Zoom>
            <Typography className={classes.bodyText} variant="h6" component="h4">
              BQ GLOBAL SOLUTIONS LIMITED is an innovative detergent company with a primary product called BQSAFEWASH; a healthy liquid laundry detergent, specifically formulated for babies and children with great concern for the African child. Having in mind the daily increase in percentage of children cancer patients world wide, skin reactions caused by harmful chemicals, high priced soaps leading to parents using products not ideal for their children. With our knowledge and expertise we are able to provide the most efficient, effective and environmentally friendly laundry solution for every home.
            </Typography>
          </Zoom>
          <Zoom>
            <a href="#top-distributors">
              <Button className="btn" variant="contained" color="secondary" disableElevation>
                Become A Distributor
              </Button>
            </a>
          </Zoom>
        </Grid>
      </Grid>
      {!matches && (
        <Fragment>
          <span
            style={{
              position: "absolute",
              top: "33.5%",
              left: "20px"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "53.5%",
              right: "36px"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "118px",
              right: "49px"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "78px",
              left: "66px"
            }}
          >
            {IconPack.mdRec}
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default AboutUs;
