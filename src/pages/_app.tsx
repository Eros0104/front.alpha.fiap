/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import GlobalStyles from 'src/styles/global';
import type { AppProps } from 'next/app';
import MUITheme from 'src/styles/materialUITheme';
import Theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { Header, Footer, Typography, Box, Menu } from 'src/components';
import menuItems from 'src/sections/menuItems';

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
        <Header onClickMenu={openMenu} />
        <Component {...pageProps} sections={menuItems} />
        <Footer>
          <Box my={5}>
            <Typography fontSize="sm" align="center" color="lightFont">
              &copy; 2021 Alpha
            </Typography>
          </Box>
        </Footer>
        <Menu open={isMenuOpen} onClose={closeMenu} items={menuItems} />
        <GlobalStyles />
      </MUIThemeProvider>
    </ThemeProvider>
  );
};
export default MyApp;
