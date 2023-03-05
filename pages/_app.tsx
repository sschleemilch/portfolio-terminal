import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import { ShellProvider } from '@/utils/shellProvider'
import { ThemeProvider } from '@/utils/themeProvider'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import React, { useEffect, useCallback } from 'react'
import Particles from 'react-particles'

const App = ({ Component, pageProps }: AppProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  
  const onClickAnywhere = () => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  // Particles
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);


  useEffect(() => {
    localStorage.setItem('visitedAt', new Date().toString());
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#a2a2aa",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: false,
                }
            },
            particles: {
                color: {
                    value: "#3d3d44",
                },
                links: {
                    color: "#52525b",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "polygon",
                },
                size: {
                    value: { min: 2, max: 5 },
                },
            },
            detectRetina: true,
        }}
      />
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
    </>
  );
}

export default function Schleeshell(props) {
  return (
    <App {...props} />
  )
}