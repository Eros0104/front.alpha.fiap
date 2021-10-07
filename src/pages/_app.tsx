/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import GlobalStyles from 'src/styles/global';
import type { AppProps } from 'next/app';
import MUITheme from 'src/styles/materialUITheme';
import Theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { Header, Footer, Typography, Drawer } from 'src/components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <ThemeProvider theme={Theme}>
      <MUIThemeProvider theme={MUITheme}>
        <Header />
        <button onClick={openMenu}>abrir</button>
        <Component {...pageProps} />
        <Footer>
          <Typography>&copy; Alpha</Typography>
        </Footer>
        <Drawer open={isMenuOpen} onClose={closeMenu} anchor="left">
          teste
        </Drawer>
        <GlobalStyles />
      </MUIThemeProvider>
    </ThemeProvider>
  );
};
export default MyApp;
