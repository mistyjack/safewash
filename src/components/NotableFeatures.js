import { Fragment } from "react";
import Image from "next/image";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      background: "url('https://ik.imagekit.io/7wpxe2myx/Safewash/notableFeaturesSmall_BfHDuMzYuWH.png') top center no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("md")]: {
        marginTop: "153px",
        background: "url('https://ik.imagekit.io/7wpxe2myx/Safewash/notable_jlUeoeq96.png') top center no-repeat",
        backgroundSize: "cover"
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
      [theme.breakpoints.up("md")]: {
        marginBottom: "30px",
        paddingTop: "40px"
      }
    },
    leftAligned: {
      textAlign: "left"
    },
    horizontalPadding: {
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 6)
      }
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
        {!matches && <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/productsSmall_OGUvx_qUbDE.png" alt="BQ Safewash baby 4 hero 1" layout="responsive" width={408} height={416} />}

        <Zoom>
          <div className={`${classes.heading} ${classes.px2AtSmall}`}>
            <Typography className={classes.headingText} variant="h3" component="h2" gutterBottom>
              BQSAFEWASH
            </Typography>
            <div>
              <Typography className={classes.mainBody} variant="h6" component="h3">
                Having in mind the daily increase in percentage of children cancer patients world wide, also skin reactions caused by harmful chemicals, with high priced soaps leading to parents using products not ideal for their children.
              </Typography>
            </div>
          </div>
        </Zoom>
        <Grid container justify="space-around" direction="row">
          {matches && (
            <Grid md={4} item className={classes.babyInBasketImage}>
              <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/products_tv5mlsVp0.png" alt="Baby in basket" layout="fixed" width={757} height={771} />
            </Grid>
          )}

          <Grid md={4} item container direction="column" justify="center">
            <Grid item>
              <Zoom>
                <div className={`${classes.item}`}>
                  <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/fiveLitres_WZRJGxBgaC.png" alt="Five litres product" layout="fixed" width={170} height={168} />
                  <Typography className={`${classes.itemHeading} ${classes[items[0].headStyle]}`} variant="h4">
                    5 Litres
                  </Typography>
                  <Typography variant="body1">&#8358; 6,500</Typography>
                </div>
              </Zoom>
            </Grid>
            <Grid item>
              <Zoom>
                <div className={`${classes.item} ${classes.pt}`}>
                  <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/fourLitres_mGoET6I8D5.png" alt="Four litres product" layout="fixed" width={170} height={168} />
                  <Typography className={`${classes.itemHeading} ${classes[items[1].headStyle]}`} variant="h4">
                    4 Litres
                  </Typography>
                  <Typography variant="body1">&#8358; 5,500</Typography>
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.mt3} container justify="space-around" direction="row-reverse">
          <Grid sm={12} md={4} item>
            <Zoom>
              <div className={`${classes.item}`}>
                <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/threeLitres_mPGXio2_J.png" alt="Two litres product" layout="fixed" width={170} height={168} />
                <Typography className={`${classes.itemHeading} ${classes[items[2].headStyle]}`} variant="h4">
                  Two Litres
                </Typography>
                <Typography variant="body1">&#8358; 2,000</Typography>
              </div>
            </Zoom>
          </Grid>
          <Grid sm={12} md={4} item>
            <Zoom>
              <div className={`${classes.item} ${classes.horizontalPadding}`}>
                <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/hypoAller_dCXb8fuS2z.png" alt="Hypoallergenic Logo" layout="fixed" width={170} height={168} />
                <Typography className={`${classes.itemHeading} ${classes[items[3].headStyle]}`} variant="h4">
                  {items[3].itemHeading}
                </Typography>
                <ul className={classes.leftAligned}>
                  <li>
                    <Typography variant="body1">Gentle on skin but tough on stains</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Retains clothing colors and elasticity</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Hypoallergenic for sensitive skin</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Blue waters scented</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Very mild</Typography>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default NotableFeatures;
