import React from 'react';
import { StyledFooter, ArrowIcon } from './Footer.styles';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer: React.FC = ({ children }) => (
  <StyledFooter>
    <ArrowIcon onClick={scrollToTop} fontSize="large" />
    {children}
  </StyledFooter>
);

export default Footer;
