import React from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import MUITheme from 'src/styles/materialTheme';
import { ThemeProvider } from '@material-ui/core/styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={MUITheme}>
    <Component {...pageProps} />;
  </ThemeProvider>
);
export default MyApp;
