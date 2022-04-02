import { createMuiTheme } from '@material-ui/core/styles';

export const themeCards = createMuiTheme({
    palette: {
      primary: {
        main: '#FFCCBC',
      },
    },
    typography: {
      h5: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },
      body2: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },
      button: {
        fontFamily: 'Poppins',
        fontWeight: 500,
      }
    }
});

export const themeProfile = createMuiTheme({
    palette: {
      primary: {
        main: '#4B3F72',
      },
      secondary: {
        main: '#04C8B4',
      },
    },
    typography: {
      h5: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },
      body1: {
        fontFamily: 'Poppins',
        fontWeight: 500,
      },
      body2: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },
      button: {
        fontFamily: 'Poppins',
        fontWeight: 500,
      }
    }
});

export const themeDashboard = createMuiTheme({
    palette: {
      primary: {
        main: '#4B3F72',
      },
    },
    typography: {
      h1: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },  
      h5: {
        fontFamily: 'Poppins',
        fontWeight: 500,
      },
      body1: {
        fontFamily: 'Poppins',
        fontWeight: 300,
      },
      body2: {
        fontFamily: 'Poppins',
        fontWeight: 400,
      },
      button: {
        fontFamily: 'Poppins',
        fontWeight: 500,
      }
    }
});

export const themeHome = createMuiTheme({
  palette: {
    primary: {
      main: '#389cff',
    },
    secondary: {
      main: '#4B3F72',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Fugaz One',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    }
  }
});

export const themeNav = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#4B3F72',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Fugaz One',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
  }
});

export const themeAuth = createMuiTheme({
  palette: {
    primary: {
      main: '#0e2d96',
    },
    secondary: {
      main: '#0a438b',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
  }
});

