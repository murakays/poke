import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { RecoilRoot } from 'recoil'

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
                <title>MyApp</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RecoilRoot>
                    <Header />
                    <Component {...pageProps} />
                </RecoilRoot>
            </ThemeProvider>
        </>
    )
}