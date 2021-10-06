import React from 'react';
import { StyledContainer } from './Container.styles';

interface Props {}

const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
