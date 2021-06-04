import App from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import { getStrapiMedia } from '../lib/media'
import { fetchAPI } from '../lib/api'
import { ThemeProvider } from 'styled-components'
import { EdWebTheme, GlobalStyle } from '../Theme'

import type { AppProps, AppContext } from 'next/app'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { global } = pageProps
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <title>Ed Perkins</title>
      </Head>
      <GlobalContext.Provider value={global}>
        <ThemeProvider theme={EdWebTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global')
  return { ...appProps, pageProps: { global } }
}

export default MyApp
