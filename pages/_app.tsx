import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import { ThemeProvider } from '@/utils/themeProvider'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  
  const onClickAnywhere = () => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  return (
    <ThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          />
      </Head>
      <Layout onClick={onClickAnywhere}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
