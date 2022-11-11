import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import createEmotionCache from '../client/styling/createEmotionCache';
// import '../client/styling/css/app.css';
// import '../client/styling/css/unity.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: IMyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Fradotech</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp
