import { ThemeProvider, useTheme } from '@/utils/themeProvider';
import Head from 'next/head'
import React from 'react'
import config from "@/config.json"
import { History } from '@/components/history';
import { useShell } from '@/utils/shellProvider';
import { Input } from '@/components/input';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const { theme } = useTheme();
  const { history } = useShell();
  
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);
  
  return (
    <>
      <Head>
        <title>Schleeshell | ¯\_(ツ)_/¯</title>
      </Head>

      <div
        className="overflow-hidden h-full"
        style={{
          padding: 16,
        }}
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />
          <Input inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  )
}

export default IndexPage;