import React from 'react';
import { Typography, Grid, Box } from 'src/components';
import { loremIpsum } from 'lorem-ipsum';

interface Props {
  title: string;
}

const OurSolutionSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Box mt={10}>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default OurSolutionSection;
