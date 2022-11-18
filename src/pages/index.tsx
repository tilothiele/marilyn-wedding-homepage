import React from 'react'
import "typeface-cormorant";

import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import ImpressionenSection from '../components/ImpressionenSection';

const theme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: [
      'Cormorant',
      'serif',
    ].join(',')
  }
});

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <ImpressionenSection/>
      <Footer/>
    </ThemeProvider>
  )
}
