import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image } from 'src/components';
import ProjectEcologyImage from 'public/images/project-ecology.png';

const ProjectEcology: React.FC = () => (
  <BasicSectionTemplate
    id="project-ecology"
    subTitle="Uma escola mais verde"
    title="Projeto Ecology"
  >
    <Grid container spacing={5}>
      <Grid item xs={12} md={7}>
        <Image src={ProjectEcologyImage} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography align="justify">
          Com o líquido fertilizante gerado pelo biodigestor, pretendemos
          utilizar para um projeto com uma iniciação à agricultura, onde o
          público-alvo será as crianças da escola, que utilizarão este líquido
          fertilizante como adubo. Isso trará diversos benefícios: Engajará as
          crianças a serem mais participativas nas atividades extracurriculares,
          contudo, crianças engajadas, tendem a estudar mais! Levando à uma
          maior conscientização da população local quanto a preservação do meio
          ambiente.
        </Typography>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default ProjectEcology;
