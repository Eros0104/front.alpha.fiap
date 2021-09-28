import type { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import {
  BasicSectionTemplate,
  CoverTemplate,
  BannerTemplate,
  ChartSectionTemplate,
} from 'src/templates';
import { Grid, Cover, Typography, Box } from 'src/components';

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

      <ChartSectionTemplate title="Biodigestor vs Placa solar" />

      <CoverTemplate>
        <Typography align="justify">{loremIpsum({ count: 5 })}</Typography>
      </CoverTemplate>
    </div>
  );
};

export default Home;
