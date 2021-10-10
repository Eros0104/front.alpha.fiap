import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image } from 'src/components';
import ProjectEcologyImage from 'public/images/project-ecology.png';
import { SectionProps } from '../section';

const ProjectEcology: React.FC<SectionProps> = ({ id, title }) => (
  <BasicSectionTemplate id={id} subTitle="Uma escola mais verde" title={title}>
    <Grid container spacing={5}>
      <Grid item xs={12} md={7}>
        <Image src={ProjectEcologyImage} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography align="justify">
          O líquido fertilizante gerado
          pelo biodigestor será utilizado
          como adubo para realizar
          atividades extracurriculares de
          iniciação à agricultura para os
          alunos da escola.
        </Typography>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default ProjectEcology;
