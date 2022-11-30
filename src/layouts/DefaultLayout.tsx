import React from 'react'
import type { ReactChild, ReactPortal, ReactNodeArray } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, Link, ListItemText } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fontStyle } from '@mui/system';
import CookieConsent from 'react-cookie-consent';

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
      <CookieConsent
        location="bottom"
        buttonText="Ja, gerne!"
        enableDeclineButton
        declineButtonText="Lieber nicht."
        cookieName="cookie-consent-merker"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Diese Website verwendet Cookies für ein besseres Surf-Erlebnis. 
        Siehe <Link href='/dsgvo' underline='none' color='inherit'>Datenschutzerklärung.</Link>
      </CookieConsent>
    </ThemeProvider>
  )
}

export default Layout