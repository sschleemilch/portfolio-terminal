import React, { useEffect, useState } from 'react';
import { useTheme } from '@/utils/themeProvider';
import packageJson from '../../package.json';
import { json } from 'stream/consumers';

export const Prompt = () => {
  const [hostname, setHostname] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div>
      <span
        style={{
          color: theme.yellow,
        }}
      >
        guest
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
      &nbsp;&nbsp;
      </span>
      <span
        style={{
          color: theme.green,
        }}
      >
        {hostname}
      </span>
      &nbsp;
      <span
        style={{
          color: theme.cyan
        }}
      >
      &nbsp; {theme.name}
      </span>
      &nbsp;
      <span
        style={{
          color: theme.blue
        }}
      >
      &nbsp; v{packageJson.version}&nbsp;
      </span>
      <span
        style={{
          color: theme.white
        }}>
      ❯
      </span>
    </div>
  );
};

export default Prompt;
