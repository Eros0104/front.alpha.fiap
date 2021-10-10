import React from 'react';
import { Image } from 'src/components'
import { StyledContainer, HoverImage } from './ComponentImage.styles';

interface Props {
    src: any;
    hoverSrc: any;
}

const Container: React.FC<Props> = ({ src, hoverSrc }) => (
  <StyledContainer>
      <Image src={src} />
    <HoverImage>
        <Image src={hoverSrc} />
    </HoverImage>      
</StyledContainer>
);

export default Container;
