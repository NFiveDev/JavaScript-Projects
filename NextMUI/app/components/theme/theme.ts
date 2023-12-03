import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue, teal, blueGrey } from '@mui/material/colors';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: {
      light: teal[500],
      main: teal[700],
      dark: teal[900]
    },
    info: blueGrey
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;