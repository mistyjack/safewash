import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      maxWidth: "1013px",
      margin: theme.spacing(0, "auto")
    },
    mb: {
      marginBottom: "123px"
    },
    headingTexts: {
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
      width: "243px",
      height: "287px",
      position: "relative",
      background: "#FFFFFF",
      boxShadow: "0px 4px 31px #F4F4F9",
      borderRadius: "12px"
    },
    name: {
      color: "#21A4C4",
      fontSize: "14px",
      lineHeight: "23px",
      paddingLeft: "93px",
      fontWeight: 600,
      paddingTop: "34px"
    },
    title: {
      color: "#776E70",
      fontSize: "12px",
      lineHeight: "19px",
      marginBottom: "40px",
      paddingLeft: "93px",
      fontWeight: 600,
      fontStyle: "normal"
    },
    testimony: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "23px",
      color: "#776E70",
      paddingLeft: "39px",
      paddingRight: "28px",
      position: "relative"
    },
    image: {
      position: "absolute",
      left: "-17px",
      top: "-21px"
    },
    quote: {
      position: "absolute",
      left: "20px"
    },
    videoItem: {
      textAlign: "center"
    }
  })
);

const Testimonies = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  const items = [
    {
      name: "Abdul Wasiu Modu",
      title: "Laundry Owner",
      testimony: "I have tried it oooo, the thickness and smell is everything.",
      imageSrc: "/images/laundryOwner1.png",
      style: "true"
    },
    {
      name: "Abdul Wasiu Modu",
      title: "A Nursing Mother",
      testimony: "Yeah I have bought after I gave birth because I feel my baby’s clothes deserve bqsafewash I and to protect his skin from rashes and allergies.",
      imageSrc: "/images/nursingMother.png",
      style: "true"
    },
    {
      name: "Abdul Wasiu Modu",
      title: "Laundry Owner",
      testimony: "I tried bqsafewash yesterday! It was the Bomb! My customers are happy and coming back for more.",
      imageSrc: "/images/laundryOwner2.png"
    }
  ];

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.headingTexts}>
        <Typography className={classes.heading} variant="h3" component="h2">
          Read Our Testimonies
        </Typography>
        <Typography className={classes.bodyText} variant="h6" component="h4">
          We use our knowledge and expertise to providethe most effecient, effective and environmentally friendly cleaning possible.
        </Typography>
      </div>

      <Grid className={classes.container} container direction="row" justify="space-around">
        {items.map(item => (
          <Grid key={item.title + " " + item.imageSrc} item>
            <Paper className={item.style ? `${classes.item} ${classes.mb}` : classes.item} elevation={0}>
              <div className={classes.image}>
                <Image src={item.imageSrc} alt={item.name} layout="fixed" width={102} height={101} />
              </div>
              <Typography className={classes.name} variant="h4">
                {item.name}
              </Typography>
              <Typography className={classes.title} variant="h5">
                {item.title}
              </Typography>
              <Typography className={classes.testimony} variant="h5">
                <div className={classes.quote}>
                  <img src="/icons/quote.svg" alt="Quotation Mark" />
                </div>
                {item.testimony}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <div className={classes.videoItem}>
        <video controls width={matches ? "879px" : "338px"} height={matches ? "396px" : "282px"} poster={matches ? "/images/videoPoster.png" : "/images/videoPosterSmall.png"}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </Fragment>
  );
};

export default Testimonies;
