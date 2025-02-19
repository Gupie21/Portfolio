import React from 'react';
import './styles/_app.scss'
import {ThemeProvider, createTheme, responsiveFontSizes, StyledEngineProvider} from '@mui/material/styles';
import {HeroBanner,SidenavRight, SidenavLeft, AboutMe, Timeline, Portfolio} from './components/_components';

let theme = createTheme({
  palette: {
    primary: {
      main: '#22ffe2',
    },
    secondary: {
      main: '#fa9848',
    }
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SidenavLeft/>
        <HeroBanner/>
        <SidenavRight/>
        <AboutMe/>
        <Timeline/>
        <Portfolio/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
