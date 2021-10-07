import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image, Divider, Slider, Box } from 'src/components';
import ProjectEcologyImage from 'public/images/project-ecology.png';

const ProjectEcology: React.FC = () => (
  <BasicSectionTemplate title="Projeto Ecology">
    <Typography>Uma escola mais verde</Typography>
    <Grid container>
      <Grid item xs={12} md={8}>
        <Image src={ProjectEcologyImage} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>lrfdsfds</Typography>
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default ProjectEcology;
