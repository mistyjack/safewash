import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: "relative"
    },
    px2: {
      padding: theme.spacing(0, 2)
    },
    heading: {
      marginBottom: "100px",
      position: "absolute",
      top: "0"
    },
    backgrd: {
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(131.41deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 15.33%, rgba(255, 210, 231, 0.9) 35.21%, rgba(254, 168, 208, 0.9) 51.11%, rgba(254, 166, 207, 0.9) 69.85%, rgba(255, 255, 255, 0.9) 98.24%, rgba(255, 255, 255, 0.9) 109.03%)",
      opacity: "0.5",
      minHeight: "1230px"
    },
    item1: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      top: "19.19%"
    },
    item2: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      top: "40.4%"
    },
    item3: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      top: "61.85%"
    },
    item4: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      top: "82.36%"
    },
    itemHeading: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "32.67px"
    },
    shieldHeading: {
      color: "#21A4C4"
    },
    bioHeading: {
      color: "#6EB245"
    },
    special: {
      color: "#02998A"
    }
  })
);

const NotableFeatures = () => {
  const classes = useStyles();

  const items = [
    {
      imageSrc: "/icons/shield.svg",
      imageAlt: "Sheild",
      itemHeading: "Protection",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item1",
      headStyle: "shieldHeading"
    },
    {
      imageSrc: "/icons/bio.svg",
      imageAlt: "Biodegradable",
      itemHeading: "Eco-friendly",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item2",
      headStyle: "bioHeading"
    },
    {
      imageSrc: "/icons/special.svg",
      imageAlt: "Special",
      itemHeading: "Unique",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item3",
      headStyle: "special"
    },
    {
      imageSrc: "/icons/bubbles.svg",
      imageAlt: "Bubbles",
      itemHeading: "High Concentration",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item4",
      headStyle: "special"
    }
  ];

  return (
    <Fragment>
      <CssBaseline />
      <Hidden mdUp>
        <div className={classes.babyInBasketImage}>
          <Image src="/images/babyInBasketSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={575} height={566} />
        </div>

        <div className={classes.container}>
          <div className={classes.backgrd} />
          <div className={`${classes.heading} ${classes.px2}`}>
            <Typography variant="h3" component="h2">
              Notable Features
            </Typography>
            <Typography variant="h6" component="h4">
              We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap clinically safe for babies and children’s health.
            </Typography>
          </div>

          <div className={classes.items}>
            {items.map((item, i) => (
              <div key={item.itemHeading} className={`${classes[item.style]} ${classes.px2}`}>
                <img src={item.imageSrc} alt={item.imageAlt} />
                <Typography className={`${classes.itemHeading} ${classes[item.headStyle]}`} variant="h4">
                  {item.itemHeading}
                </Typography>
                <Typography variant="body1">{item.itemBody}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Hidden>
    </Fragment>
  );
};

export default NotableFeatures;
