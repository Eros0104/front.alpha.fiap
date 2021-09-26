import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

interface Props {}

const Header: React.FC<Props> = props => {
  return (
    <AppBar position="static">
      <Toolbar>Alpha</Toolbar>
    </AppBar>
  );
};

export default Header;
