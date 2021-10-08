import styled from 'styled-components';

interface HoverImageProps {
  hoverSrc: string;
}

export interface StyleProps {
  src: string;
  height?: string;
}

export const HoverImage = styled.div<HoverImageProps>`
  width: 100%;
  top: 0;
  position: absolute;
  height: 100%;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url(${({ hoverSrc }) => hoverSrc});
  transition: 0.8s ease;
  opacity: 0;
`;

export const Image = styled.div<StyleProps>`
  width: 100%;
  position: relative;
  height: ${({ height }) => height};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});

  :hover ${HoverImage} {
    opacity: 1;
  }
`;

export const ChildrenContainer = styled.div`
  position: relative;
  z-index: 2;
`;
