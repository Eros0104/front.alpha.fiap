import React from 'react';
import { StyledSpacer, StyledProps } from './Spacer.styles';

const Spacer: React.FC<StyledProps> = ({ children, margin, padding }) => (
  <StyledSpacer margin={margin} padding={padding}>
    {children}
  </StyledSpacer>
);

export default Spacer;
