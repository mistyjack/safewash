import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import TownSelect from "../src/components/TownSelect";
import IconPack from "../public/Icons";
import Distributor from "../public/distributors";
import Fade from "react-reveal/Fade";

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
      boxShadow: "0px 4px 31px #F4F4F9",
      borderRadius: "12px",
      zIndex: 10,
      marginBottom: "126px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
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
      zIndex: 10,
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
      zIndex: "1",
      top: 0,
      right: 0
    },
    bgImageLabel: {
      position: "absolute",
      zIndex: 10,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      lineHeight: "70.5px",
      fontStyle: "normal",
      color: "rgba(0,0,0,0.8)",
      fontFamily: "Cocon",
      fontWeight: 700,
      fontSize: "96px"
    },
    bg: {
      position: "absolute",
      left: "49px",
      zIndex: 5,
      top: "-47px"
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
  const [showDistributors, setShowDistributors] = useState(true);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [state, setState] = useState("");

  const backgroundOption = [
    { border: "https://ik.imagekit.io/7wpxe2myx/Safewash/Ellipse_30_58-B4n-kJ4.svg", color: "#6EB245" },
    { border: "https://ik.imagekit.io/7wpxe2myx/Safewash/Ellipse_29_bDZq0f9vU.svg", color: "#21A4C4" },
    { border: "https://ik.imagekit.io/7wpxe2myx/Safewash/Ellipse_28_gCfYEuGOc9d.svg", color: "#DB99CD" }
  ];

  const handleSearch = (e, location) => {
    setState(location);
    setShowSearchResult(true);
    setShowDistributors(false);
  };

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
                <MenuItem value="sort1">By state</MenuItem>
                <MenuItem value="sort2">By town</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          {(sort == "sort1" || sort == "sort2") && <TownSelect search={handleSearch} />}
        </div>

        <div className={classes.itemContainer}>
          {showSearchResult && (
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
          )}

          {showDistributors && (
            <Grid container direction="row" justify="space-around">
              {Distributor.map(item => (
                <Grid key={item.username} item>
                  <Fade>
                    <Paper className={classes.item} elevation={1}>
                      <div className={classes.image}>
                        <Image src={backgroundOption[Math.floor(Math.random() * 3)].border} alt={item.username} layout="fixed" width={202} height={188} />
                        <span className={classes.bgImageLabel}>{item.username[0] + item.username[1]}</span>
                      </div>
                      <div className={classes.bg}>
                        <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/circle_cmEMMl8eQ1t.png" alt="Background" layout="fixed" width={188} height={188} />
                      </div>
                      <Typography className={classes.name} variant="h4">
                        {item.username}
                      </Typography>
                      <Typography className={classes.address} variant="h5">
                        {item.address} <br /> {item.phone}
                      </Typography>
                      <a href={`tel:+${item.phone}`}>
                        <Button className="btn btn--top-dist" variant="contained" color="secondary" disableElevation>
                          Contact
                        </Button>
                      </a>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          )}

          {showSearchResult && state && (
            <Grid container direction="row" justify="space-around">
              {Distributor.filter(item => item.state == state).map(item => (
                <Grid key={item.username} item>
                  <Fade>
                    <Paper className={classes.item} elevation={1}>
                      <div className={classes.image}>
                        <Image src={backgroundOption[Math.floor(Math.random() * 3)].border} alt={item.username} layout="fixed" width={202} height={188} />
                        <span className={classes.bgImageLabel}>{item.username[0] + item.username[1]}</span>
                      </div>
                      <div className={classes.bg}>
                        <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/circle_cmEMMl8eQ1t.png" alt="Background" layout="fixed" width={188} height={188} />
                      </div>
                      <Typography className={classes.name} variant="h4">
                        {item.username}
                      </Typography>
                      <Typography className={classes.address} variant="h5">
                        {item.address} <br /> {item.phone}
                      </Typography>
                      <Button className="btn btn--top-dist" variant="contained" color="secondary" disableElevation>
                        Contact
                      </Button>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          )}

          {showSearchResult && (
            <Typography className={classes.viewDist} variant="h6">
              View More Distributors{" "}
              <IconButton
                onClick={e => {
                  setShowDistributors(true);
                  setShowSearchResult(false);
                }}
                className={classes.blueIcon}
              >
                <span className="material-icons" aria-hidden="true">
                  Arrow Forward Icon
                </span>
                <ArrowForwardIcon />
              </IconButton>
            </Typography>
          )}
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
