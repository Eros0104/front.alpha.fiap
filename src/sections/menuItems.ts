import {
  BiodigestorVsSolar,
  FinancialFeedback,
  NecessaryBudget,
  OurSolution,
  PossibleImprovements,
  ProjectEcology,
  Conclusion,
} from 'src/sections';

const menuItems = [
  {
    text: 'Nossa Solução',
    id: 'our-solution',
    Component: OurSolution,
  },
  {
    text: 'Biodigestor VS Placa Solar',
    id: 'biodigestor-vs-solar',
    Component: BiodigestorVsSolar,
  },
  {
    text: 'Projeto Ecology',
    id: 'project-ecology',
    Component: ProjectEcology,
  },
  {
    text: 'Potencial de Retorno Financeiro',
    id: 'financial-feedback',
    Component: FinancialFeedback,
  },
  {
    text: 'Investimento Necessário',
    id: 'necessary-budget',
    Component: NecessaryBudget,
  },
  {
    text: 'Possíveis Melhorias',
    id: 'possible-improvements',
    Component: PossibleImprovements,
  },
  {
    text: 'Conclusão',
    id: 'conclusion',
    Component: Conclusion,
  },
];

export default menuItems;
