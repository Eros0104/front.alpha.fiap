import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Box } from 'src/components';
import { scrollTo } from 'src/functions';

interface Item {
  text: string;
  id: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: Item[];
}

const Menu: React.FC<Props> = ({ open, onClose, items }) => {
  const onScrollTo = (id: string) => {
    onClose();
    scrollTo(id);
  };

  const renderMenu = () =>
    items.map(({ text, id }) => (
      <ListItem button key={text} onClick={() => onScrollTo(id)}>
        <ListItemText primary={text} />
      </ListItem>
    ));

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: '100%', minWidth: '300px' }}>
        <List>{renderMenu()}</List>
      </Box>
    </Drawer>
  );
};

export default Menu;
