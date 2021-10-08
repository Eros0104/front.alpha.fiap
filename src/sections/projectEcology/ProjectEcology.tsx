import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image, Slider, Box } from 'src/components';
import ProjectEcologyImage from 'public/images/project-ecology.png';

const ProjectEcology: React.FC = () => (
  <BasicSectionTemplate
    id="project-ecology"
    subTitle="Uma escola mais verde"
    title="Projeto Ecology"
  >
    <Grid container>
      <Grid item xs={12} md={7}>
        <Box mb={5}>
          <Image src={ProjectEcologyImage} />
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box mx={5}>
          <Typography align="justify">
            Com o líquido fertilizante gerado pelo biodigestor, pretendemos
            utilizar para um projeto com uma iniciação à agricultura, onde o
            público-alvo será as crianças da escola, que utilizarão este líquido
            fertilizante como adubo. Isso trará diversos benefícios: Engajará as
            crianças a serem mais participativas nas atividades
            extracurriculares, contudo, crianças engajadas, tendem a estudar
            mais! Levando à uma maior conscientização da população local quanto
            a preservação do meio ambiente.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default ProjectEcology;
