import { Fragment } from "react";
import Image from "next/image";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      [theme.breakpoints.up("md")]: {
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
    px2AtSmall: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 3)
      }
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mainBody: {
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "normal",
        fontStyle: "normal"
      }
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
      [theme.breakpoints.up("md")]: {
        fontSize: "48px",
        lineHeight: "77px",
        fontStyle: "normal"
      }
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
    },
    pt: {
      marginBottom: "30px",
      paddingTop: "40px"
    }
  })
);

const NotableFeatures = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  const items = [
    {
      itemHeading: "Protection",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item1",
      headStyle: "shieldHeading"
    },
    {
      itemHeading: "Eco-friendly",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item2",
      headStyle: "bioHeading"
    },
    {
      itemHeading: "Unique",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      style: "item3",
      headStyle: "special"
    },
    {
      itemHeading: "High Concentration",
      itemBody: "We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap.",
      headStyle: "bubble"
    }
  ];

  return (
    <Fragment>
      <CssBaseline />

      <div className={classes.container}>
        {!matches && <Image src="/images/babyInBasketSmallScreen.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={400} height={408} />}

        <div className={`${classes.heading} ${classes.px2AtSmall}`}>
          <Typography className={classes.headingText} variant="h3" component="h2" gutterBottom>
            Notable Features
          </Typography>
          <div>
            <Typography className={classes.mainBody} variant="h6" component="h4">
              We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap clinically safe for babies and children’s health.
            </Typography>
          </div>
        </div>
        <Grid container justify="space-around" direction="row">
          {matches && (
            <Grid md={4} item className={classes.babyInBasketImage}>
              <Image src="/images/babyInBasket.png" alt="BQ Safewash baby 4 hero 1" layout="fixed" width={575} height={566} />
            </Grid>
          )}

          <Grid md={4} item container direction="column" justify="center">
            <Grid item>
              <div className={`${classes.item}`}>
                {IconPack.shield}
                <Typography className={`${classes.itemHeading} ${classes[items[0].headStyle]}`} variant="h4">
                  {items[0].itemHeading}
                </Typography>
                <Typography variant="body1">{items[0].itemBody}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div className={`${classes.item} ${classes.pt}`}>
                {IconPack.bio}
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
              {IconPack.special}
              <Typography className={`${classes.itemHeading} ${classes[items[2].headStyle]}`} variant="h4">
                {items[2].itemHeading}
              </Typography>
              <Typography variant="body1">{items[2].itemBody}</Typography>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={`${classes.item}`}>
              {IconPack.bubbles}
              <Typography className={`${classes.itemHeading} ${classes[items[3].headStyle]}`} variant="h4">
                {items[3].itemHeading}
              </Typography>
              <Typography variant="body1">{items[3].itemBody}</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default NotableFeatures;
