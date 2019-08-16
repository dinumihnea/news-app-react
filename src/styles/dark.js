import { createMuiTheme } from '@material-ui/core';
import { red, teal } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: 'rgba(239, 83, 80, 0.16)',
      main: red[300],
      dark: red[400]
    },
    secondary: {
      light: teal[100],
      main: teal[300],
      dark: teal[400]
    },
    background: {
      default: '#202125',
      paper: '#323539'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontSize: 14
  },
  overrides: {
    MuiListItem: {
      button: {
        '&:hover, &:focus': {
          backgroundColor: 'rgba(239,83,80, 0.14)'
        },
        '&$selected, &$selected:hover, &$selected:focus': {
          backgroundColor: 'rgba(239,83,80, 0.14)',
          color: red[700]
        }
      }
    }
  }

});
