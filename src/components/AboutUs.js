import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
        padding: theme.spacing(0),
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
    <Fragment>
      <CssBaseline />

      <Grid className={classes.container} container direction="row-reverse" alignItems="center" justify="space-between">
        <Grid className={classes.womanImage} xs={12} md={5} item>
          {matches ? <Image src="/images/woman.png" alt="About us Image" layout="responsive" width={543} height={719} /> : <Image src="/images/womanSmallScreen.png" alt="About us Image" layout="responsive" width={278} height={374} />}
        </Grid>

        <Grid className={classes.textContent} xs={12} md={7} item>
          <Typography className={classes.heading} variant="h3" component="h2">
            About Us
          </Typography>
          <Typography className={classes.bodyText} variant="h6" component="h4">
            We use our knowledge and expertise to provide the most effecient, effective and environmentally friendly cleaning possible. Having in mind the daily increase in percentage of children cancer patients world wide, skin reactions caused by harmful chemicals, high priced soaps leading to parents using products not ideal for children.
          </Typography>
          <Button className="btn" variant="contained" color="secondary" disableElevation>
            Become A Distributor
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutUs;
