import styled, { css } from 'styled-components';

export interface StyledProps {
  padding?: string;
  margin?: string;
}

export const StyledSpacer = styled.div<StyledProps>`
  ${({ padding = 0, margin = 0 }) => css`
    padding: ${padding};
    margin: ${margin};
  `}
`;
