/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import GlobalStyles from 'src/styles/global';
import type { AppProps } from 'next/app';
import MUITheme from 'src/styles/materialUITheme';
import Theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { Header, Footer, Typography, Box, Menu } from 'src/components';

const items = [
  {
    text: 'Nossa Solução',
    id: 'our-solution',
  },
  {
    text: 'Biodigestor VS Placa Solar',
    id: 'biodigestor-vs-solar',
  },
  {
    text: 'Projeto Ecology',
    id: 'project-ecology',
  },
  {
    text: 'Potencial de Retorno Financeiro',
    id: 'financial-feedback',
  },
  {
    text: 'Investimento Necessário',
    id: 'necessary-budget',
  },
];

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
        <Component {...pageProps} />
        <Footer>
          <Box my={5}>
            <Typography fontSize="sm" align="center" color="lightFont">
              &copy; 2021 Alpha
            </Typography>
          </Box>
        </Footer>
        <Menu open={isMenuOpen} onClose={closeMenu} items={items} />
        <GlobalStyles />
      </MUIThemeProvider>
    </ThemeProvider>
  );
};
export default MyApp;
