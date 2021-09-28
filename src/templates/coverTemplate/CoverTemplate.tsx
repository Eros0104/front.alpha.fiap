import React from 'react';
import { Grid, Cover, Box } from 'src/components';

interface Props {}

const SectionTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Cover src="background.png" />
        </Grid>
        <Grid item xs={6}>
          <Box mx={10} my={5}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionTemplate;
