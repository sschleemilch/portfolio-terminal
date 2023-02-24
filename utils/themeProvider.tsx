import React, { useEffect, useState } from 'react';
import Themes from '@/themes.json';
import { Theme } from '@/interfaces/theme';
import config from '@/config.json';

export interface ThemeContextType {
  setTheme: (name: string) => string;
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextType>(null);

interface Props {
  children: React.ReactNode;
}

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, _setTheme] = useState<Theme>(Themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    setTheme(savedTheme || config.theme);
  }, []);

  const setTheme = (name: string) => {
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === name,
    );

    if (index === -1) {
      return `<span style="color: ${theme.red}">Theme '${name}' not found. Try 'theme ls' to see the list of available themes.</span>`;
    }

    _setTheme(Themes[index]);

    localStorage.setItem('theme', name);

    return `<span style="color: ${Themes[index].green}">Theme <b>${Themes[index].name}</b> set successfully!</span>`;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
