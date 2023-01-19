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

function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <CacheProvider value={emotionCache}>

        {/* <div className='app'>
          <Sidebar />
          <main className="content" style={{
            width: "100%",
          }}> */}
        {/* <Navbar /> */}
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>

        {/* </main>


        </div>; */}

      </CacheProvider>
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
