import styled from 'styled-components';

export interface StyleProps {
  src: string;
  height?: string;
}

export const Image = styled.div<StyleProps>`
  width: 100%;
  position: relative;
  height: ${({ height }) => height};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
`;
