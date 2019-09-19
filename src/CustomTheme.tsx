import { grey, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

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
