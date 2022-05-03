import red from '@mui/material/colors/red';
import { createTheme } from '@mui/material/styles';

const primary = '#5643FF';

const AppTheme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  palette: {
    secondary: {
      main: '#3b4753',
      contrastText: '#fff'
    },
    primary: {
      main: primary,
      contrastText: '#fff'
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[500]
    }
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '10px'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#db3131',
          '&$error': {
            color: '#db3131'
          },
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: '8rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '16px 12px'
        },
        multiline: {
          padding: 0,
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        wrapped: {
          textTransform: 'none'
        },
        iconWrapper: {
          textTransform: 'none'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: primary
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        sizeSmall: {
          textTransform: 'none'
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          height: '60%'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0
        },
        gutters: {
          paddingRight: "8px",
          paddingLeft: "8px",
        }
      }
    }
  }
});

export default AppTheme;
