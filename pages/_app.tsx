import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { RecoilRoot } from 'recoil'
import { Global, css } from '@emotion/react'

import Header from '../components/Header';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        jssStyles?.parentElement?.removeChild(jssStyles)
    }, [])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Global styles={css`
                    html,
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }
                `} />
                <CssBaseline />
                <RecoilRoot>
                    <Header />
                    <Component {...pageProps} />
                </RecoilRoot>
            </ThemeProvider>
        </>
    )
}