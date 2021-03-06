import App from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { EdWebTheme, GlobalStyle } from '../Theme'

import type { AppProps, AppContext } from 'next/app'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { global } = pageProps

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href={global.favicon.url} /> */}
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
  const client = new ApolloClient({
    uri: 'https://edweb-backend.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query getGlobal {
        global {
          favicon {
            id
            created_at
            updated_at
            name
            alternativeText
            caption
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            previewUrl
            provider
            provider_metadata
            related {
              __typename
            }
          }
        }
      }
    `,
  })
  return { ...appProps, pageProps: { global: data.global } }
}

export default MyApp
