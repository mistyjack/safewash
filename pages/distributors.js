import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import TownSelect from "../src/components/TownSelect";
import IconPack from "../public/Icons";

import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SmallSelect = withStyles(theme => ({
  root: {
    marginTop: "3px",
    marginLeft: "10px"
  },
  input: {
    borderRadius: "8px",
    border: "0.5px solid #C4C4C4",
    padding: theme.spacing("7px", "12px", "8px", "12px"),
    width: "65px",
    color: "#C4C4C4"
  }
}))(InputBase);

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "relative"
    },
    container: {
      paddingTop: "303px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "850px",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing("231px", 3, 0)
      },
      position: "relative",
      zIndex: 10
    },
    heading: {
      fontFamily: "BR Firma",
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "45.27px",
      fontStyle: "normal",
      color: "#795A69",
      marginBottom: "20px"
    },
    inputLabel: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "18.51px",
      color: "#C4C4C4",
      marginTop: "3px",
      marginLeft: "10px"
    },
    itemContainer: {
      position: "relative",
      maxWidth: "967px",
      margin: theme.spacing("227px", "auto", "350px"),
      zIndex: 10
    },
    mb: {
      marginBottom: "126px"
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
    searchResult: {
      fontFamily: "BR Firma",
      fontStyle: "italic",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "39px",
      position: "absolute",
      top: "-130px",
      left: "50px",
      color: "#483D3F",
      zIndex: 10
    },
    viewDist: {
      fontFamily: "BR Firma",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "32.67px",
      position: "absolute",
      bottom: "-70px",
      left: "20px",
      color: "#21A4C4",
      [theme.breakpoints.up("md")]: {
        bottom: "20px"
      }
    },
    blueIcon: {
      color: "#21A4C4"
    },
    bgImage: {
      position: "absolute",
      top: 0,
      right: 0
    },
    blueBg: {
      position: "absolute",
      top: "-30rem",
      left: "-30rem",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

export default function Distributors() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");
  const [sort, setSort] = useState("Sort");

  const items = [
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/kudiratB_BjPy7UrJB.png", imageAlt: "Kudrat Bakare Passport", name: "Kudirat Bakare", address: "Surulere, Lagos State.", phone: "09030267295", style: "mb" },
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/ibikunleVentures_VZEzX-x19O7.png", imageAlt: "Ibikunle Ventures Passport", name: "Ibikunle Ventures", address: "Surulere, Lagos State.", phone: "09030267295", style: "mb" },
    { imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/rosemerryShop_A8S6SjIajU.png", imageAlt: "Rosemerry’s Shop Passport", name: "Rosemerry’s Shop", address: "Surulere, Lagos State.", phone: "09030267295" }
  ];

  return (
    <Fragment>
      <CssBaseline />
      <Head>
        <title>Safewash</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          key="description"
          content="At Safewash, we are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap 
clinically safe for babies and children’s health."
        />
        <meta property="og:title" content="Distributors | Safewash" key="og:title" />
        <meta property="og:image" key="og:image" content="https://ik.imagekit.io/7wpxe2myx/Safewash/videoPosterSmall_ISE82SuWK.png"></meta>
      </Head>

      <main className={classes.root}>
        <div className={classes.bgImage}>
          <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/dist_hNh2C_tN3.png" layout="fixed" width={522} height={606} />
        </div>
        <div className={classes.blueBg}>{IconPack.blueBg}</div>
        <div className={classes.container}>
          <Typography className={classes.heading} variant="h4" gutterBottom>
            Find Distributors Around You{" "}
            <FormControl variant="filled">
              <Select onClick={e => (e.target.value ? setSort(e.target.value) : null)} labelId="sort-select-label" id="sort-select" label="sort" value={sort} input={<SmallSelect />}>
                <MenuItem value="Sort">Sort</MenuItem>
                <Divider />
                <MenuItem value="sort1">sort1</MenuItem>
                <MenuItem value="sort2">sort2</MenuItem>
                <MenuItem value="sort3">sort3</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <TownSelect />
        </div>

        <div className={classes.itemContainer}>
          <Typography className={classes.searchResult} variant="h6">
            Search result{" "}
            {matches ? (
              <IconButton>
                <span className="material-icons" aria-hidden="true">
                  Arrow Forward Icon
                </span>
                <ArrowForwardIcon />
              </IconButton>
            ) : (
              <IconButton>
                <span className="material-icons" aria-hidden="true">
                  Arrow Downard Icon
                </span>
                <ArrowDownwardIcon />
              </IconButton>
            )}
          </Typography>
          <Grid container direction="row" justify="space-around">
            {items.map(item => (
              <Grid key={item.imageAlt} item>
                <Paper className={item.style ? `${classes.item} ${classes.mb}` : classes.item} elevation={0}>
                  <div className={classes.image}>
                    <Image src={item.imageSrc} alt={item.imageAlt} layout="fixed" width={202} height={188} />
                  </div>
                  <Typography className={classes.name} variant="h4">
                    {item.name}
                  </Typography>
                  <Typography className={classes.address} variant="h5">
                    {item.address} <br /> {item.phone}
                  </Typography>
                  <Button className="btn btn--top-dist" variant="contained" color="secondary" disableElevation>
                    Contact
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography className={classes.viewDist} variant="h6">
            View More Distributors{" "}
            <IconButton className={classes.blueIcon}>
              <span className="material-icons" aria-hidden="true">
                Arrow Forward Icon
              </span>
              <ArrowForwardIcon />
            </IconButton>
          </Typography>
        </div>

        {!matches && (
          <Fragment>
            <span
              style={{
                position: "absolute",
                top: "5rem",
                left: "45%"
              }}
            >
              {IconPack.circle}
            </span>
            <span
              style={{
                position: "absolute",
                top: "15rem",
                left: "50%"
              }}
            >
              {IconPack.smallCircle}
            </span>
            <span
              style={{
                position: "absolute",
                top: "8rem",
                left: "1rem"
              }}
            >
              {IconPack.smallRec}
            </span>
            <span
              style={{
                position: "absolute",
                top: "15%",
                right: "3rem",
                zIndex: 0
              }}
            >
              {IconPack.smallRec}
            </span>
            <span
              style={{
                position: "absolute",
                top: "17.8%",
                left: "30%",
                zIndex: 0
              }}
            >
              {IconPack.mdRec}
            </span>
          </Fragment>
        )}
      </main>
    </Fragment>
  );
}
