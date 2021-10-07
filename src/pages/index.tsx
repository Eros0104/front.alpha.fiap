import React from 'react';
import type { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import {
  BasicSectionTemplate,
  CoverTemplate,
  ChartSectionTemplate,
} from 'src/templates';
import { FinancialFeedback, NecessaryBudget } from 'src/sections';
import {
  Grid,
  Typography,
  Box,
  Divider,
  Container,
  Cover,
} from 'src/components';

const Home: NextPage = () => (
  <div>
    <Cover src="background.png" height="500px">
      <Container>
        <Box paddingTop="100px">
          <Typography element="h1" color="lightFont" fontSize="xxl">
            Lorem
          </Typography>
        </Box>
      </Container>
    </Cover>
    <Container>
      <BasicSectionTemplate title="Nossa Solução">
        <Grid container>
          <Grid xs={12} md={6} item>
            <Box mr={5}>
              <Typography align="justify">
                O Biodigestor consiste em um reator anaeróbio no qual, na
                ausência de oxigênio, microorganismos realizam a decomposição de
                resíduos sólidos como dejetos animais ou restos alimentares,
                gerando como subprodutos o biogás e o biofertilizante. O biogás
                tem potencial para geração de calor, e dependendo da quantidade
                produzida, geração de energia elétrica, enquanto o
                biofertilizante possui características muito benéficas na
                aplicação no solo e vegetação, como adubo orgânico.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6} item>
            <Box ml={5}>
              <Typography align="justify">
                Como todo reator, um biodigestor exige cuidados de implantação e
                operação, adequando-se a realidade. Assim, faz-se necessário um
                estudo do local, escolha da tecnologia apropriada e
                dimensionamento do sistema, de acordo com as características
                locais e finalidade prevista. O Dimensionamento de Biodigestor
                tem como finalidade, portanto, projetar a melhor maneira de
                atender todas as necessidades dos clientes, oferecendo uma
                solução ambientalmente adequada de disposição de resíduos
                sólidos orgânicos.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </BasicSectionTemplate>

      <ChartSectionTemplate title="Biodigestor vs Placa Solar" />

      <FinancialFeedback />
      <Divider />
      <NecessaryBudget />
    </Container>
    <CoverTemplate>
      <Typography align="justify">Text</Typography>
    </CoverTemplate>
  </div>
);

export default Home;
