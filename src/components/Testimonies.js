import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import IconPack from "../../public/Icons";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import PauseIcon from "@material-ui/icons/Pause";

import Zoom from "react-reveal/Zoom";

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
      position: "relative",
      zIndex: "10",
      textAlign: "center",
      maxWidth: "816px",
      padding: theme.spacing("128px", 2, 0, 2),
      margin: theme.spacing(0, "auto"),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing("288px", 6, 0, 6)
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
    videoContainer: {
      textAlign: "center",
      zIndex: 10,
      position: "relative",
      marginTop: "85px",
      marginBottom: "114px",
      overflow: "hidden",
      [theme.breakpoints.up("md")]: {
        marginTop: "-66px",
        marginBottom: "224px"
      }
    },
    playButton: {
      position: "absolute",
      zIndex: 10,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer"
    },
    videoElement: {
      width: "90%",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "676px",
        maxHeight: "564px"
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "879px",
        maxHeight: "396px"
      }
    },
    dNone: {
      display: "none"
    },
    backgrd: {
      position: "absolute",
      top: "8rem",
      left: "0",
      zIndex: 0,
      maxWidth: "100vw",
      overflow: "hidden"
    },
    gridCont: {
      position: "relative",
      zIndex: 10
    },
    controls: {
      display: "flex",
      position: "absolute:",
      bottom: 0,
      flexWrap: "wrap",
      backgroundColor: "#FE96C6",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      transform: "translateY(100%)",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "676px"
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "879px"
      }
    },
    videoButtons: {
      height: "100%",
      background: "none",
      border: 0,
      outline: 0,
      cursor: "pointer",
      padding: 0
    },
    barJuice: {
      height: 8,
      background: theme.palette.secondary.main,
      position: "absolute",
      bottom: 23
    }
  })
);

const Testimonies = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");
  const videoElement = useRef(null);
  const [isPlayClicked, setIsPlayClicked] = useState(false);
  const [barPosition, setBarPosition] = useState("0%");

  const items = [
    {
      name: "Abdul Wasiu Modu",
      title: "Laundry Owner",
      testimony: "I have tried it oooo, the thickness and smell is everything.",
      imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/laundryOwner1_0s0WaqvHs.png",
      style: "true"
    },
    {
      name: "Abdul Wasiu Modu",
      title: "A Nursing Mother",
      testimony: "Yeah I have bought after I gave birth because I feel my baby’s clothes deserve bqsafewash I and to protect his skin from rashes and allergies.",
      imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/nursingMother_vQAXh0lORgZ.png",
      style: "true"
    },
    {
      name: "Abdul Wasiu Modu",
      title: "Laundry Owner",
      testimony: "I tried bqsafewash yesterday! It was the Bomb! My customers are happy and coming back for more.",
      imageSrc: "https://ik.imagekit.io/7wpxe2myx/Safewash/laundryOwner2_OSbOoq4V9.png"
    }
  ];

  const handleClick = () => {
    videoElement.current.play();
    setIsPlayClicked(true);
  };

  const handlePlayPause = () => {
    if (videoElement.current.paused) {
      videoElement.current.play();
      setIsPlayClicked(true);
    } else {
      videoElement.current.pause();
      setIsPlayClicked(false);
    }
  };

  useEffect(() => {
    function handleTimeEvent() {
      if (videoElement.current) {
        let juiceBarPosition = `${(videoElement.current.currentTime / videoElement.current.duration) * 100}%`;
        setBarPosition(juiceBarPosition);
      }
    }

    if (isPlayClicked) {
      videoElement.current.addEventListener("timeupdate", handleTimeEvent);
    } else {
      videoElement.current.removeEventListener("timeupdate", handleTimeEvent);
    }
  }, [isPlayClicked]);

  return (
    <div style={{ position: "relative" }}>
      <CssBaseline />
      <div className={classes.headingTexts}>
        <Zoom>
          <Typography className={classes.heading} variant="h3" component="h2">
            Read Our Testimonies
          </Typography>
        </Zoom>
        <Zoom>
          <Typography className={classes.bodyText} variant="h6" component="h3">
            Imagine having an healthy baby and you had to be admitted back in the hospital few days after birth due escalated skin irritation(Dermititis) as a result of poorly formulated laundry soap used. This is our founder case with her son in 2019. As devastated as she was, with her background as a pharmacolgist she formulated bqsafewash. Helped over 50 homes during test stage and commercialized after 0ne year.
          </Typography>
        </Zoom>
      </div>

      <Grid className={classes.container} container direction="row" justify="space-around">
        {items.map(item => (
          <Grid className={classes.gridCont} key={item.title + " " + item.imageSrc} item>
            <Zoom>
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
                  <div className={classes.quote}>{IconPack.quote}</div>
                  {item.testimony}
                </Typography>
              </Paper>
            </Zoom>
          </Grid>
        ))}
      </Grid>

      <div className={classes.videoContainer + " video-container"}>
        <video src="/safewash.mp4" ref={videoElement} className={classes.videoElement} poster={matches ? "https://ik.imagekit.io/7wpxe2myx/Safewash/videoPoster_L2XoDXSrm.png" : "https://ik.imagekit.io/7wpxe2myx/Safewash/videoPosterSmall_ISE82SuWK.png"}></video>

        <div className={classes.controls + " controls"}>
          <div className={classes.bar}>
            <div className={classes.barJuice} style={{ width: barPosition }}></div>
          </div>
          <div className={classes.videoButtonContainer}>
            <IconButton onClick={handlePlayPause} className={classes.videoButtons} aria-label="video control">
              <span className="material-icons" aria-hidden="true">
                Video Control
              </span>
              {isPlayClicked ? <PauseIcon fontSize="small" style={{ color: "#fff" }} /> : <PlayArrowIcon fontSize="small" style={{ color: "#fff" }} />}
            </IconButton>
          </div>
        </div>
        <div onClick={handleClick} className={isPlayClicked ? `${classes.playButton} ${classes.dNone}` : classes.playButton}>
          <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/playButton_B3gx1rPmu.svg" layout="fixed" alt="Play button" width={158} height={97} />
        </div>
      </div>

      {!matches && (
        <Fragment>
          <span className={classes.backgrd}>
            <Image src="https://ik.imagekit.io/7wpxe2myx/Safewash/distBgrd_sQvnfOu2Axs.png" layout="fixed" width={1029} height={1109} alt="Distributors bgrd" />
          </span>
          <span
            style={{
              position: "absolute",
              top: "13.5%",
              left: "45%"
            }}
          >
            {IconPack.circle}
          </span>
          <span
            style={{
              position: "absolute",
              top: "30%",
              right: "31px"
            }}
          >
            {IconPack.smallRec}
          </span>
          <span
            style={{
              position: "absolute",
              top: "40%",
              right: "59px"
            }}
          >
            {IconPack.circle}
          </span>
          <span
            style={{
              position: "absolute",
              top: "53%",
              left: "21px"
            }}
          >
            {IconPack.mdRec}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "17.5%",
              right: "75px"
            }}
          >
            {IconPack.mdRec}
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default Testimonies;
