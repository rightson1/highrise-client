import "../styles/globals.css";
import "../styles/client.css";

import Head from "next/head";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createCache';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "../utils/themeContext";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import StoreNav from "../components/StoreNav";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import LabelBottomNavigation from "../components/Bottom";
import TemporaryDrawer from "../components/SideDrawer";
import StoreBottom from "../components/StoreBottom";
import StoreFab from "../components/StoreFab";
import FoooterBusiness from "../components/FooterBusiness";
import GasNav from "../components/GasNav";
import GasSide from "../components/GasSide";
import { Toaster } from "react-hot-toast";
import GasBottom from "../components/GasBottom";
import "../styles/404.css"
import WaterNav from "../components/WaterNav";


function MyApp(props) {

  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (Component.layout) {
    return (
      <>
        <Head>
          <title>hfoods </title>
          <meta name="description" content="Highrise Cannnan foods delivery application" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <CacheProvider value={emotionCache}>


          <AnimatePresence>
            <ThemeProvider>
              <div className="bg-primary  client w-[100vw] overflow-x-hidden">
                <Navbar />
                <div className="pt-[80px] bg-primary">
                  <Component {...pageProps} />
                  <Footer />
                  <LabelBottomNavigation />
                  <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                  {/* <TemporaryDrawer /> */}
                </div>
              </div>
            </ThemeProvider>
          </AnimatePresence>



        </CacheProvider>
      </>
    );
  } else if (Component.nolayout) {
    return (
      <>
        <Head>
          <title>hfoods </title>
          <meta name="description" content="Highrise cannan gas delivery applicaation" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <CacheProvider value={emotionCache}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </>
    );

  } else if (Component.gas) {
    return (
      <>
        <Head>
          <title>hgas</title>
          <meta name="description" content="Highrise Cannan food delivery Application" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <AnimatePresence mode="wait">
          <ThemeProvider>
            <div className=" bg-bgEn  w-[100vw] overflow-x-hidden">
              <GasNav />
              <div className="">
                <Toaster />
                <Component {...pageProps} />
                <GasSide />
                <Footer />
                <GasBottom />
                <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />

              </div>
            </div>
          </ThemeProvider>
        </AnimatePresence>
      </>
    );
  }
  else if (Component.water) {
    return (
      <>
        <Head>
          <title>hgas</title>
          <meta name="description" content="Highrise Cannan food delivery Application" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <AnimatePresence mode="wait">
          <ThemeProvider>
            <div className=" bg-bgEn  w-[100vw] overflow-x-hidden">
              <WaterNav />
              <div className="">
                <Toaster />
                <Component {...pageProps} />
                <GasSide />
                <Footer />
                <GasBottom />
                <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />

              </div>
            </div>
          </ThemeProvider>
        </AnimatePresence>
      </>
    );
  }

  else {
    return (
      <>
        <Head>
          <title>hfoods</title>
          <meta name="description" content="Highrise cannan food delivery app" />

          <link rel="icon" href="/favicon.ico" />

        </Head>
        <CacheProvider value={emotionCache}>


          <AnimatePresence>
            <ThemeProvider>
              <div className="bg-primary  client w-[100vw] overflow-x-hidden">
                <StoreNav />
                <div className="pt-[80px] bg-primary">
                  <Component {...pageProps} />
                  {/* <TemporaryDrawer /> */}
                  <LabelBottomNavigation />
                  {/* <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" /> */}
                  <StoreFab />
                  <FoooterBusiness />
                </div>
              </div>
            </ThemeProvider>
          </AnimatePresence>
        </CacheProvider>
      </>
    );
  }

}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
