import React, { useEffect, useState } from 'react';
import { useTheme } from '@/utils/themeProvider';

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
      &nbsp;on&nbsp;
      </span>
      <span
        style={{
          color: theme.green,
        }}
      >
        {hostname}
      </span>
      &nbsp;with
      <span
        style={{
          color: theme.cyan
        }}
      >
      &nbsp; {theme.name}&nbsp;
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
