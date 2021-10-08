import React from 'react';
import type { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import {
  BasicSectionTemplate,
  CoverTemplate,
  ChartSectionTemplate,
} from 'src/templates';
import {
  FinancialFeedback,
  NecessaryBudget,
  ProjectEcology,
  OurSolution,
} from 'src/sections';
import {
  Grid,
  Typography,
  Box,
  Divider,
  Container,
  Cover,
  Image,
  Button,
} from 'src/components';
import { scrollTo } from 'src/functions';

const Home: NextPage = () => (
  <div>
    <Cover
      src="./images/jabaete-background.png"
      hoverSrc="background.png"
      height="500px"
    >
      <Container>
        <Box paddingTop="100px">
          <Typography
            fontWeight={900}
            element="h1"
            color="lightFont"
            fontSize="xxl"
          >
            CHALLENGE EDP:
          </Typography>
          <Typography
            element="h1"
            fontWeight={700}
            color="lightFont"
            fontSize="xl"
          >
            JABAETÉ
          </Typography>
          <Typography
            element="h1"
            fontWeight={700}
            color="lightFont"
            fontSize="lg"
            upperCase
          >
            Uma solução ecológica e econômica
          </Typography>
          <Box mt={3}>
            <Button
              onClick={() => scrollTo('our-solution')}
              size="large"
              variant="outlined"
              color="primary"
            >
              Saiba mais
            </Button>
          </Box>
        </Box>
      </Container>
    </Cover>
    <Container>
      <OurSolution />
      <ChartSectionTemplate
        id="chart-section"
        title="Biodigestor vs Placa Solar"
      />
      <ProjectEcology />
      <FinancialFeedback />
      <NecessaryBudget />
    </Container>
    <CoverTemplate>
      <Typography align="justify">Text</Typography>
    </CoverTemplate>
  </div>
);

export default Home;
