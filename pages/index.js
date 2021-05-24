import Head from "next/head";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import FirstSlide from "../src/components/FirstSlide";
import SecondSlide from "../src/components/SecondSlide";
import ThirdSlide from "../src/components/ThirdSlide";
import FourthSlide from "../src/components/FourthSlide";
import NotableFeatures from "../src/components/NotableFeatures";
import AboutUs from "../src/components/AboutUs";
import TopDistributors from "../src/components/TopDistributors";
import ContactUs from "../src/components/ContactUs";
import Testimonies from "../src/components/Testimonies";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

SwiperCore.use([Autoplay, Pagination]);

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const mdUp = useMediaQuery("(min-width:960px)");

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
        <meta property="og:title" content="Home | Safewash" key="og:title" />
        <meta property="og:image" key="og:image" content="https://ik.imagekit.io/7wpxe2myx/Safewash/videoPosterSmall_ISE82SuWK.png"></meta>
      </Head>

      <main className={classes.root}>
        {/* Main landing section begins */}
        <section id="home">
          <Swiper slidesPerView={1} pagination autoplay>
            <SwiperSlide>
              <FirstSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SecondSlide />
            </SwiperSlide>
            <SwiperSlide>
              <ThirdSlide />
            </SwiperSlide>
            <SwiperSlide>
              <FourthSlide />
            </SwiperSlide>
          </Swiper>
        </section>
        {/* End of main landing section */}

        {/* Notable features section begins */}
        <section id="features">
          <NotableFeatures />
        </section>
        {/* End of notable features section */}

        {/* About us section begins */}
        <section id="about-us">
          <AboutUs />
        </section>
        {/* End of About us section */}

        {/* Top distributors section begins */}
        <section id="top-distributors" style={{ position: "relative" }}>
          <TopDistributors />
        </section>
        {/* End of Top distributors section */}

        {/* Contact us section begins */}
        <section id="contact-us">
          <ContactUs />
        </section>
        {/* End of Contact us section */}

        {/* Testimonies section begins */}
        <section id="testimonies">
          <Testimonies />
        </section>
        {/* End of Testimonies section */}
      </main>
    </Fragment>
  );
}
