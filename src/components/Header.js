import { cloneElement, Fragment, useState } from "react";
import Image from "next/image";
import Link from "./Link";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      minHeight: "96px",
      [theme.breakpoints.up("md")]: {
        paddingLeft: "10rem !important"
      }
    },
    tab: {
      minWidth: 80
    },
    homeLink: {
      [theme.breakpoints.down("sm")]: {
        flexGrow: 1
      },
      marginRight: "100px"
    },
    list: {
      marginTop: 136,
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto"
    },
    listItem: {
      textAlign: "center",
      marginBottom: 66
    },
    closeButton: {
      position: "absolute",
      top: 26,
      right: 5
    },
    drawer: {
      height: "100vh",
      background: "linear-gradient(180deg, rgba(254, 150, 198, 0.3) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF"
    },
    mdCircle: {
      position: "absolute",
      top: "27.3%",
      left: "36%"
    },
    smRec1: {
      position: "absolute",
      top: "13%",
      left: "10%"
    },
    smRec2: {
      position: "absolute",
      top: "50%",
      right: "10%"
    },
    mdRec: {
      position: "absolute",
      top: "50%",
      left: "10%"
    },
    backToTop: {
      position: "fixed",
      zIndex: 1000,
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

function allyProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0
  });
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector("#home");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.backToTop}>
        {children}
      </div>
    </Zoom>
  );
}

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [menuState, setMenuState] = useState({ top: false });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setMenuState({ ...menuState, [anchor]: open });
  };

  const tab = (
    <Fragment>
      <Tabs
        TabIndicatorProps={{
          style: {
            display: "none"
          }
        }}
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="main navigation tabs"
      >
        <Tab classes={{ root: classes.tab }} label="Home" component={Link} href="/#home" {...allyProps(0)} />
        <Tab label="About Us" component={Link} href="/#about-us" {...allyProps(1)} />
        <Tab label="Become a Distributor" component={Link} href="/#top-distributors" {...allyProps(2)} />
        <Tab label="Contact Us" component={Link} href="/#contact-us" {...allyProps(3)} />
      </Tabs>
    </Fragment>
  );

  const list = anchor => (
    <div className={classes.list} role="Navigation menu" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <IconButton className={classes.closeButton} onClick={toggleDrawer("top", false)} edge="start" color="inherit" aria-label="menu">
        <span className="material-icons" aria-hidden="true">
          Close button
        </span>
        {IconPack.closeIcon}
      </IconButton>
      <span className={classes.mdCircle}>{IconPack.circle}</span>
      <span className={classes.smRec1}>{IconPack.smallRec}</span>
      <span className={classes.smRec2}>{IconPack.smallRec}</span>
      <span className={classes.mdRec}>{IconPack.mdRec}</span>
      <List>
        {[
          { label: "Home", link: "#home" },
          { label: "About Us", link: "#about-us" },
          { label: "Become a Distributor", link: "#top-distributors" },
          { label: "Contact Us", link: "#contact-us" }
        ].map((item, index) => (
          <ListItem key={`${index}: ${item}`} className={classes.listItem} button component={Link} href={item.link}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontWeight: 600,
                  fontSize: 14,
                  fontStyle: "normal",
                  lineHeight: "19.07px"
                }
              }}
            >
              {item.label}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent" position="fixed">
          <Toolbar className={classes.container}>
            <Link className={classes.homeLink} href="/">
              <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/safewash_logo_9VQ4-XPfY.svg" layout="fixed" alt="Safewash Logo" width={57} height={60} />
            </Link>
            <Hidden smDown>{tab}</Hidden>
            <Hidden mdUp>
              <SwipeableDrawer anchor={"top"} open={menuState["top"]} onClose={toggleDrawer("top", false)} onOpen={toggleDrawer("top", true)}>
                <div className={classes.drawer}>{list("top")}</div>
              </SwipeableDrawer>
            </Hidden>
            <Hidden mdUp>
              <IconButton style={{ paddingRight: 0 }} onClick={toggleDrawer("top", true)} edge="start" color="inherit" aria-label="menu">
                <span className="material-icons" aria-hidden="true">
                  Menu Icon
                </span>
                {IconPack.menuIcon}
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default Header;
