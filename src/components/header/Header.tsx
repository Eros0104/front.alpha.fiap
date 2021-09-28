import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { HeaderContainer, Logo } from './Header.styles';

interface Props {}

const Header: React.FC<Props> = props => {
  return (
    <HeaderContainer>
      <Logo src="alpha-dark.png" />
    </HeaderContainer>
  );
};

export default Header;
