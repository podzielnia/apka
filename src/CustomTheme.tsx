import { createMuiTheme } from '@material-ui/core/styles';

const CustomTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: '#000',
        backgroundColor: '#fff',
        boxShadow: '0 1px 15px 0 rgba(0, 0, 0, 0.24)',
        '&:hover': {
          backgroundColor: '#fff',
        },
      },
    },
  },
});

export default CustomTheme;
