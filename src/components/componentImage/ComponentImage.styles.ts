import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
`;

export const HoverImage = styled.div`
  position: absolute;
  transition: 0.3s ease;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;
