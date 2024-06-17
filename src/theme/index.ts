import type { Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const useAppTheme = () => (useMediaQuery('(prefers-color-scheme: dark)') ? darkTheme : lightTheme);

export interface CustomTheme extends Theme {
  listItemText: {
    default?: string;
  };
}

const generalThemeParams = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  listItemText: {
    default: '#757575',
  },
  ...generalThemeParams,
} as CustomTheme);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  listItemText: {
    default: '#fff',
  },
  ...generalThemeParams,
} as CustomTheme);
