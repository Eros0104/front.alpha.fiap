import React from 'react';
import { Typography, Grid, Box, Spacer } from 'src/components';

interface Props {
  title: string;
}

const SplitTitle = (title: string) => {
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  const lastIndex = title.lastIndexOf(' ');
  const newTitle = title.substring(0, lastIndex);

  return { lastWord, newTitle };
};

const OurSolutionSection: React.FC<Props> = ({ title, children }) => {
  const splittedTitle = SplitTitle(title);
  return (
    <Box mt={10} mb={20}>
      <Box mb={5}>
        <Typography upperCase element="h1" fontSize="xl" fontWeight={900}>
          {splittedTitle.newTitle}{' '}
          <Typography color="primary" fontSize="xl" element="span">
            {splittedTitle.lastWord}
          </Typography>
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default OurSolutionSection;
