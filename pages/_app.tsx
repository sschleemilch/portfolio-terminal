import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import { ShellProvider } from '@/utils/shellProvider'
import { ThemeProvider } from '@/utils/themeProvider'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  
  const onClickAnywhere = () => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  return (
    <ThemeProvider>
      <ShellProvider>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
            />
        </Head>
        <Layout onClick={onClickAnywhere}>
          <Component {...pageProps} inputRef={inputRef}/>
        </Layout>
      </ShellProvider>
    </ThemeProvider>
  );
}

export default (props) => {
  return (
    <App {...props} />
  )
}