import React from 'react';
import { Image, StyleProps } from './Cover.styles';

interface Props extends StyleProps {}

const Cover: React.FC<Props> = ({ src, height = 'calc(100vh - 80px)' }) => {
  return <Image src={src} height={height} />;
};

export default Cover;
