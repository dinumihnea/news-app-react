import { createMuiTheme } from '@material-ui/core';
import { red, teal } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: red[50],
      main: red[400],
      dark: red[500]
    },
    secondary: {
      light: teal[200],
      main: teal[400],
      dark: teal[500]
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff'
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
