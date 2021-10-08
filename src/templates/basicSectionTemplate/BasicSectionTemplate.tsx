import React from 'react';
import { Typography, Box, Divider } from 'src/components';

interface Props {
  title: string;
  alignTitle?: 'left' | 'right' | 'center';
  id: string;
  subTitle?: string;
}

const SplitTitle = (title: string) => {
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  const lastIndex = title.lastIndexOf(' ');
  const newTitle = title.substring(0, lastIndex);

  return { lastWord, newTitle };
};

const OurSolutionSection: React.FC<Props> = ({
  title,
  children,
  alignTitle,
  id,
  subTitle,
}) => {
  const splittedTitle = SplitTitle(title);
  return (
    <Box pt={8} id={id}>
      <Box mb={5}>
        <Typography
          upperCase
          element="h1"
          align={alignTitle}
          fontSize="xl"
          fontWeight={900}
        >
          {splittedTitle.newTitle}{' '}
          <Typography
            fontWeight={100}
            color="primary"
            fontSize="xl"
            element="span"
          >
            {splittedTitle.lastWord}
          </Typography>
        </Typography>
        {subTitle && <Typography upperCase>{subTitle}</Typography>}
      </Box>
      {children}
      <Box mt={4}>
        <Divider />
      </Box>
    </Box>
  );
};

export default OurSolutionSection;
