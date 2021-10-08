import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
    items.map(({ text, id }, index) => (
      <ListItem button key={text} onClick={() => onScrollTo(id)}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
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
