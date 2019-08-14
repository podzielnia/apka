import { createMuiTheme } from '@material-ui/core/styles';
import { grey, teal } from 'material-ui-colors';

const CustomTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        backgroundColor: '#009688',
        '&:hover': {
          backgroundColor: '#009688',
        },
      },
    },
  },
});

export default CustomTheme;
