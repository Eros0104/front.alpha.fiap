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
import EcoImage from 'public/images/eco.png';
import Biodigestor from 'public/images/biodigestor.jpg';
import Biodigestor2 from 'public/images/biodigestor2.jpg';
import Biodigestor3 from 'public/images/biodigestor3.jpg';

const Home: NextPage = () => (
  <div>
    <Cover src="background.png" height="500px">
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
            <Button size="large" variant="outlined" color="primary">
              Saiba mais
            </Button>
          </Box>
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
        <Box my={5}>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Componentes do Projeto
          </Typography>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Grid container>
                <Grid item xs={12}>
                  <Box my={10}>
                    <Image src={Biodigestor} />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box my={5}>
                    <Image src={Biodigestor3} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Image src={Biodigestor2} />
            </Grid>
          </Grid>
        </Box>
        <Box my={5}>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Beneficíos e Vantages
          </Typography>
          <Grid container>
            <Grid xs={12} sm={6} item>
              tetes
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image src={EcoImage} />
            </Grid>
          </Grid>
        </Box>
        <ul>
          <li />
        </ul>
      </BasicSectionTemplate>

      <ChartSectionTemplate title="Biodigestor vs Placa Solar" />
      <ProjectEcology />
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
