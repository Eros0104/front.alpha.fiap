import React from 'react';
import { Box, Cover } from 'src/components';

interface Props {}

const BannerTemplate: React.FC<Props> = props => {
  return <Cover src={'background.png'} />;
};

export default BannerTemplate;
