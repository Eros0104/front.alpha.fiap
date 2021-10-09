import { createTheme } from '@material-ui/core/styles';
import Theme from '../theme';

const MUITheme = createTheme({
  palette: {
    primary: {
      main: Theme.colors.primary,
    },
  },
  breakpoints: {
    values: Theme.breakpoints,
  },
});

export default MUITheme;
