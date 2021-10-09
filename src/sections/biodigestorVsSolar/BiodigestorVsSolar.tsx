import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography } from 'src/components';
import { Line } from 'react-chartjs-2';
import Theme from 'src/styles/theme';
import { SectionProps } from '../section';

const data = {
  labels: ['100Kw', '1000Kw', '2000kw'],
  datasets: [
    {
      label: 'Biogás',
      data: [45000, 46000, 70000],
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

const BiodigestorVsSolar: React.FC<SectionProps> = ({ id, title }) => (
  <BasicSectionTemplate id={id} title={title}>
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

        <br />
      </Grid>

      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} upperCase>
            Vantagens:
          </Typography>
          <ul>
            <li>
              <Typography>
                Elimina o passivo ambiental dos resíduos e efluentes gerados
                pela agropecuária;
              </Typography>
            </li>
            <li>
              <Typography>
                Reduz a emissão de gases de efeito estufa, contribuindo para a
                mitigação das mudanças climáticas;
              </Typography>
            </li>
            <li>
              <Typography>
                Gera subprodutos que também podem ser aproveitados na produção,
                tais como biofertilizantes;
              </Typography>
            </li>
            <li>
              <Typography>
                Pode ser usada tanto para produção de energia elétrica quanto
                térmica;
              </Typography>
            </li>
            <li>
              <Typography>
                Reduz a dependência da energia cativa da rede pública;
              </Typography>
            </li>
            <li>
              <Typography>
                Substitui o GLP para uso em cozinhas e tratores;
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} upperCase>
            Desvantagens:
          </Typography>
          <ul>
            <li>
              <Typography>
                Alto investimento inicial. Também, dependendo da demanda por
                energia, pode ser que a empresa não consiga gerar resíduos o
                suficiente somente com sua atividade produtiva;
              </Typography>
            </li>
            <li>
              <Typography>
                Dessa forma, o curso de biogás é especialmente interessante para
                quem pretende trabalhar com empresas agropecuárias, propriedades
                rurais familiares, empresas geradoras de grande quantidade de
                resíduos orgânicos, como, por exemplo, fábricas de suco ou
                cerâmicas.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default BiodigestorVsSolar;
