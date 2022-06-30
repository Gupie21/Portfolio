import React from 'react';
import './styles/app.scss'
import {ThemeProvider, createTheme, responsiveFontSizes, StyledEngineProvider} from '@mui/material/styles';
import {HeroBanner,SidenavRight, SidenavLeft, AboutMe} from './components/components';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FAC748',
    },
    secondary: {
      main: '#FAC748',
    },
    transparent:{
      main: '#fff0',
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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
