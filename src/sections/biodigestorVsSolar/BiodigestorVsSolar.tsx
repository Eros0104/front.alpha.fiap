import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography } from 'src/components';
import { Line } from 'react-chartjs-2';
import Theme from 'src/styles/theme';

const data = {
  labels: ['100Kw', '200Kw', '1000kw'],
  datasets: [
    {
      label: 'Biogás',
      data: [45000, 46000, 55000],
      fill: false,
      backgroundColor: Theme.colors.primary,
      borderColor: Theme.colors.primary,
    },
    {
      label: 'Placa Solar',
      data: [20000, 40000, 90000],
      fill: false,
      backgroundColor: '#bababa',
      borderColor: '#bababa',
    },
  ],
};

const BiodigestorVsSolar: React.FC = () => (
  <BasicSectionTemplate
    id="biodigestor-vs-solar"
    title="Biodigestor VS Placa Solar"
  >
    <Grid container spacing={5}>
      <Grid item xs={12} sm={5}>
        <Line data={data} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography align="justify">
          O que pouca gente sabe, no entanto, é que o Brasil é o maior usuário
          de energia de biomassa do mundo, seguido de Estados Unidos e Alemanha.
        </Typography>
        <Typography align="justify">
          Além disso, o Brasil possui o maior potencial para geração de energia
          de biogás do mundo, devido à grande quantidade de resíduos
          agropecuários produzidos diariamente. Outras vantagens do biogás são:
        </Typography>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default BiodigestorVsSolar;
