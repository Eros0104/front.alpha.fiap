import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import {
  Grid,
  Typography,
  Image,
  Divider,
  Select,
  Spacer,
  Box,
} from 'src/components';
import FinanceImage from 'public/images/finance.svg';

const projectCost = () => {
  const map = {
    1000: 'teste',
    2000: 'teste',
  };
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
  const [selectedBiodigestor, setSelectedBiodigestor] = useState(1000);

  const handleChange = (value: any) => {
    setSelectedBiodigestor(value);
  };
  return (
    <BasicSectionTemplate title="Investimento Necessário">
      <Select
        value={selectedBiodigestor}
        label="Biodigestores"
        onChange={evt => handleChange(evt.target.value)}
        itens={selectItens}
      />
      <Typography element="h3" fontWeight={900}>
        Custo do Projeto
      </Typography>
      <Typography fontSize="lg" color="primary">
        R$ 10
      </Typography>
      <Typography element="h3" fontWeight={900}>
        Prazo para Elaboração do Projeto
      </Typography>
      <Typography fontSize="lg" color="primary">
        R$ 10
      </Typography>
      <Typography element="h3" fontWeight={900}>
        Estimativa de Custo da Implementação do Biodigestor
      </Typography>
      <Typography fontSize="lg" color="primary">
        R$ 10
      </Typography>
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
      <Divider />
    </BasicSectionTemplate>
  );
};

export default FinancialFeedback;
