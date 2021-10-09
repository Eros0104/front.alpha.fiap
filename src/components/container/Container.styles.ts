/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  margin: 10px auto;
  padding: 0 50px;
`;
