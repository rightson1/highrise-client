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
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "../utils/themeContext";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import StoreNav from "../components/StoreNav";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import LabelBottomNavigation from "../components/Bottom";
import TemporaryDrawer from "../components/SideDrawer";
import StoreBottom from "../components/StoreBottom";

function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (Component.layout) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />

          <link rel="icon" href="/favicon.ico" />

        </Head>
        <CacheProvider value={emotionCache}>


          <AnimatePresence>
            <ThemeProvider>
              <div className="bg-primary  client w-[100vw] overflow-x-hidden">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
                <LabelBottomNavigation />
                <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                <TemporaryDrawer />
              </div>
            </ThemeProvider>
          </AnimatePresence>



        </CacheProvider>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />

          <link rel="icon" href="/favicon.ico" />

        </Head>
        <CacheProvider value={emotionCache}>


          <AnimatePresence>
            <ThemeProvider>
              <div className="bg-primary  client w-[100vw] overflow-x-hidden">
                <StoreNav />
                <Component {...pageProps} />
                <TemporaryDrawer />
                <StoreBottom />
                <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                <Footer />
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
