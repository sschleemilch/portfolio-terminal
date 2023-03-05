import React from 'react';
import { useTheme } from '@/utils/themeProvider';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className="grid place-items-center h-full w-full overflow-hidden bg-transparent"
      onClick={onClick}
      style={{
        color: theme.foreground,
        position: "absolute",
        top: 0,
        left: 0
      }}
    >
      <main
        className="w-full h-full xl:w-2/3 xl:h-3/4 rounded-xl shadow-lg overflow-hidden"
        style={{
          background: theme.background,
          borderColor: theme.yellow,
          borderWidth: 4,
          margin: 16
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
