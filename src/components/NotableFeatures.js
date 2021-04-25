import { Fragment } from "react";
import Image from "next/image";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: "1230px",
      background: "url('/images/notableFeatures.png') top center no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("md")]: {
        height: "1000px",
        marginTop: "153px"
      }
    },
    babyInBasketImage: {
      padding: theme.spacing(0, 3),
      [theme.breakpoints.down("md")]: {
        transform: "scale(0.7)",
        transformOrigin: "center left"
      }
    },
    px2: {
      padding: theme.spacing(0, 2)
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mainBody: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: "normal",
      fontStyle: "normal"
    },
    heading: {
      marginBottom: "100px",
      [theme.breakpoints.up("md")]: {
        maxWidth: "816px",
        padding: theme.spacing(0, 6),
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "36px"
      }
    },
    item: {
      textAlign: "center",
      marginBottom: "72px",
      maxWidth: "331px",
      padding: theme.spacing(0, 2),
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        maxWidth: "504px"
      }
    },
    headingText: {
      fontSize: "48px",
      lineHeight: "77px",
      fontStyle: "normal"
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
    },
    bubble: {
      color: "#9D3E89"
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
      headStyle: "bubble"
    }
  ];

  return (
    <Fragment>
      <CssBaseline />

      {/* Mobile view begins */}
      <Hidden mdUp>
        <div>
          <Image src="/images/babyInBasketSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={400} height={408} />
        </div>

        <div className={classes.container}>
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
              <div key={item.itemHeading} className={`${classes.item} ${classes.px2}`}>
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
      {/* Mobile view ends */}

      {/* Big screen view begins */}
      <Hidden smDown>
        <div className={classes.container}>
          <div className={classes.heading}>
            <Typography className={classes.headingText} variant="h3" component="h2">
              Notable Features
            </Typography>
            <div>
              <Typography className={classes.mainBody} variant="h6" component="h4">
                We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap clinically safe for babies and children’s health.
              </Typography>
            </div>
          </div>
          <Grid container justify="space-around" direction="row">
            <Grid md={4} item className={classes.babyInBasketImage}>
              <Image src="/images/babyInBasket.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={575} height={566} />
            </Grid>

            <Grid md={4} item container direction="column" justify="center">
              <Grid item>
                <div className={`${classes.item}`}>
                  <img src={items[0].imageSrc} alt={items[0].imageAlt} />
                  <Typography className={`${classes.itemHeading} ${classes[items[0].headStyle]}`} variant="h4">
                    {items[0].itemHeading}
                  </Typography>
                  <Typography variant="body1">{items[0].itemBody}</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={`${classes.item}`}>
                  <img src={items[1].imageSrc} alt={items[1].imageAlt} />
                  <Typography className={`${classes.itemHeading} ${classes[items[1].headStyle]}`} variant="h4">
                    {items[1].itemHeading}
                  </Typography>
                  <Typography variant="body1">{items[1].itemBody}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={classes.mt3} container justify="space-around" direction="row-reverse">
            <Grid md={4} item>
              <div className={`${classes.item}`}>
                <img src={items[2].imageSrc} alt={items[2].imageAlt} />
                <Typography className={`${classes.itemHeading} ${classes[items[2].headStyle]}`} variant="h4">
                  {items[2].itemHeading}
                </Typography>
                <Typography variant="body1">{items[2].itemBody}</Typography>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={`${classes.item}`}>
                <img src={items[3].imageSrc} alt={items[3].imageAlt} />
                <Typography className={`${classes.itemHeading} ${classes[items[3].headStyle]}`} variant="h4">
                  {items[3].itemHeading}
                </Typography>
                <Typography variant="body1">{items[3].itemBody}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      {/* Big screen view ends */}
    </Fragment>
  );
};

export default NotableFeatures;
