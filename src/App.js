import React from 'react';
import './styles/_app.scss'
import {ThemeProvider, createTheme, responsiveFontSizes, StyledEngineProvider} from '@mui/material/styles';
import {HeroBanner,SidenavRight, SidenavLeft, AboutMe, Timeline} from './components/_components';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FAC748',
    },
    secondary: {
      main: '#FAC748',
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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
