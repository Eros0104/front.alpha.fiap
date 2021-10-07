import React from 'react';

import Drawer from '@material-ui/core/Drawer';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Menu: React.FC<Props> = ({ open, onClose }) => (
  <Drawer anchor="left" open={open} onClose={onClose}>
    fdsf
  </Drawer>
);

export default Menu;
