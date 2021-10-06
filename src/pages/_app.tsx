/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import GlobalStyles from 'src/styles/global';
import type { AppProps } from 'next/app';
import MUITheme from 'src/styles/materialUITheme';
import Theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { Header, Footer, Typography } from 'src/components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={Theme}>
    <MUIThemeProvider theme={MUITheme}>
      <Header />
      <Component {...pageProps} />
      <Footer>
        <Typography>&copy; Alpha</Typography>
      </Footer>
      <GlobalStyles />
    </MUIThemeProvider>
  </ThemeProvider>
);
export default MyApp;
