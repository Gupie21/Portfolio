import React from 'react';
import './styles/_app.scss'
import {ThemeProvider, createTheme, responsiveFontSizes, StyledEngineProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SplitPortfolio } from './components/splitPortfolio';

let theme = createTheme({
  palette: {
    primary: {
      main: '#22ffe2',
    },
    secondary: {
      main: '#fa9848',
    },
    background: {
      default: '#08111f',
      paper: 'rgba(8, 17, 31, 0.82)',
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SplitPortfolio />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
