import React from 'react'
import type { ReactChild, ReactPortal, ReactNodeArray } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fontStyle } from '@mui/system';

type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

type WithChildren<T = {}> = T & { children?: ReactNode };

type LayoutProps = WithChildren<{
    pageTitle: string,
}>

const theme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontSize: 18,
    fontFamily: [
      'Cormorant Garamond',
      'serif',
    ].join(',')
  }
});

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      {children}
      <Footer/>
    </ThemeProvider>
  )
}

export default Layout