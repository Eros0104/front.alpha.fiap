import React from 'react';
import type { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import {
  BasicSectionTemplate,
  CoverTemplate,
  BannerTemplate,
  ChartSectionTemplate,
} from 'src/templates';
import { FinancialFeedback } from 'src/sections';
import { Grid, Typography, Box, Image, Divider } from 'src/components';
import FinanceImage from 'public/images/finance.svg';

import { loremIpsum } from 'lorem-ipsum';

const Home: NextPage = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <BannerTemplate />

      <BasicSectionTemplate title="Nossa Solução">
        <Grid container>
          <Grid xs={6} item>
            <Box mx={10} my={5}>
              <Typography align="justify">
                {loremIpsum({ count: 5 })}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box mx={10} my={5}>
              <Typography align="justify">
                {loremIpsum({ count: 5 })}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </BasicSectionTemplate>

      <ChartSectionTemplate title="Biodigestor vs Placa Solar" />

      <FinancialFeedback />

      <CoverTemplate>
        <Typography align="justify">{loremIpsum({ count: 5 })}</Typography>
      </CoverTemplate>
    </div>
  );
};

export default Home;
