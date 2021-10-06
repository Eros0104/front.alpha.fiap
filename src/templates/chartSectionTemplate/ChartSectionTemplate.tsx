import React from 'react';
import { Typography, Box } from 'src/components';
import { Line } from 'react-chartjs-2';
import { BasicSectionTemplate } from 'src/templates';
import { loremIpsum } from 'lorem-ipsum';

interface Props {
  title: string;
}
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};
const SectionTemplate: React.FC<Props> = ({ children, title }) => {
  return (
    <BasicSectionTemplate title={title}>
      {children}
      <Line data={data} />
    </BasicSectionTemplate>
  );
};

export default SectionTemplate;
