import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image, Select, Spacer, Box } from 'src/components';
import FinanceImage from 'public/images/finance.svg';
import { convertToBRL } from 'src/functions';

interface BiodigestorBudget {
  projectCost: number;
  deadline: number;
  implementationCost: number;
}

interface MapProject {
  [key: number]: {
    projectCost: number;
    deadline: number;
    implementationCost: number;
  };
}

const getProject = (id: number): BiodigestorBudget => {
  const map: MapProject = {
    1000: {
      projectCost: 3926,
      deadline: 50,
      implementationCost: 43908.22,
    },
    2000: {
      projectCost: 4147,
      deadline: 50,
      implementationCost: 44329.44,
    },
    10000: {
      projectCost: 4589,
      deadline: 50,
      implementationCost: 47696.26,
    },
  };
  // eslint-disable-next-line no-prototype-builtins
  return map.hasOwnProperty(id) ? map[id] : map[1000];
};

const selectItens = [
  {
    value: 1000,
    text: '1.000 litros',
  },
  {
    value: 2000,
    text: '2.000 litros',
  },
  {
    value: 10000,
    text: '10.000 litros',
  },
];

const FinancialFeedback: React.FC = () => {
  const [selectedBiodigestor, setSelectedBiodigestor] = useState(
    getProject(1000),
  );
  const [selectValue, setSelectValue] = useState(1000);

  const handleChange = (value: number) => {
    setSelectedBiodigestor(getProject(value));
    setSelectValue(value);
  };
  return (
    <BasicSectionTemplate id="necessary-budget" title="Investimento Necessário">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Select
            value={selectValue}
            label="Biodigestores"
            onChange={({ target }) =>
              handleChange(
                typeof target.value === 'number' ? target.value : 1000,
              )
            }
            itens={selectItens}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box mb={3}>
            <Typography element="h3" fontWeight={900}>
              Custo do Projeto
            </Typography>
            <Typography fontSize="lg" color="primary">
              {convertToBRL(selectedBiodigestor.projectCost)}
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography element="h3" fontWeight={900}>
              Prazo para Elaboração do Projeto
            </Typography>
            <Typography fontSize="lg" color="primary">
              {selectedBiodigestor.deadline}{' '}
              <Typography element="span" fontSize="lg" color="darkFont">
                dias úteis
              </Typography>
            </Typography>
          </Box>
          <Typography element="h3" fontWeight={900}>
            Estimativa de Custo da Implementação do Biodigestor
          </Typography>
          <Typography fontSize="lg" color="primary">
            {convertToBRL(selectedBiodigestor.implementationCost)}
          </Typography>
        </Grid>
      </Grid>

      <Box my={5}>
        <Typography
          color="primary"
          fontSize="sm"
          align="center"
          fontWeight={700}
        >
          Observação:{' '}
          <Typography element="span" color="darkFont" fontSize="sm">
            a estimativa de custos não considera o custo da mão de obra, e do
            gerador de energia pois são fatores que podem variar constantemente
          </Typography>
        </Typography>
      </Box>
    </BasicSectionTemplate>
  );
};

export default FinancialFeedback;
