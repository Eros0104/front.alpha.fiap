import React from 'react';
import { Image, StyleProps } from './Cover.styles';

type Props = StyleProps;

const Cover: React.FC<Props> = ({
  src,
  height = 'calc(100vh - 80px)',
  children,
}) => (
  <Image src={src} height={height}>
    {children}
  </Image>
);

export default Cover;
