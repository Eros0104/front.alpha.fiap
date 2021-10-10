import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image } from 'src/components';
import { SectionProps } from '../section';

const ProjectEcology: React.FC<SectionProps> = ({ id, title }) => (
  <BasicSectionTemplate id={id} title={title}>
        <Typography align="justify">
          A partir do projeto apresentado,
          o problema do alto custo das
          contas de energia serão
          solucionados em uma escola
          pública. Apesar de iniciar em um
          único local, há a possibilidade de
          uma expansão por toda a
          comunidade, incluindo as
          residências.
        </Typography>
  </BasicSectionTemplate>
);

export default ProjectEcology;
