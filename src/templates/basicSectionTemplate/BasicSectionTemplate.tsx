import React from 'react';
import { Typography, Grid, Box, Spacer } from 'src/components';
import { loremIpsum } from 'lorem-ipsum';

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
    <Spacer margin="50px 0">
      <Typography variant="h2" component="h1">
        {splittedTitle.newTitle}{' '}
        <Typography color="primary" variant="h2" component="span">
          {splittedTitle.lastWord}
        </Typography>
      </Typography>
      {children}
    </Spacer>
  );
};

export default OurSolutionSection;
