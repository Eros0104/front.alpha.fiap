import React from 'react';
import {
  Image,
  StyleProps,
  HoverImage,
  ChildrenContainer,
} from './Cover.styles';

interface Props extends StyleProps {
  hoverSrc: string;
}

const Cover: React.FC<Props> = ({
  src,
  hoverSrc,
  height = 'calc(100vh - 80px)',
  children,
}) => (
  <Image src={src} height={height}>
    <ChildrenContainer>{children}</ChildrenContainer>
    <HoverImage hoverSrc={hoverSrc} />
  </Image>
);

export default Cover;
