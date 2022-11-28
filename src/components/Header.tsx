import { Grid, Link, MenuItem, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import { DesktopMenu, MobileMenu, MenuItemType } from './Menu'

const petite_orchid_color = "#DD9D9D";

// Menü: Home Impressionen Blog Service Über uns Kontakt

const menuItems: MenuItemType[] = [
    { name: "Home", url: '/' },
    { name: "Service", url: '/#service' },
    { name: "Impressionen", url: '/impressionen' },
    { name: "Über mich", url: '/about' },
    { name: "Kontakt", url: '/contact' },
]


export default function Header() {

  const matches = useMediaQuery('(min-width:800px)');


  //    const theme = useTheme();
  return (
        <Grid container direction="column" flexDirection='row' style={{backgroundColor: petite_orchid_color}} pl={10}>
            <Grid item ml={10} style={{marginRight: 'auto'}}>
                <Link href='/'>
                <StaticImage src="../images/logos/marilyn-logo-pink.png" alt="marilyn-logo" height={100}/>
                </Link>
            </Grid>

            {matches ? <DesktopMenu menuItems={menuItems}/> : null}

            <Grid item ml={10} style={{marginLeft: 'auto'}}>


            {!matches ? <MobileMenu menuItems={menuItems}/> : null}

            </Grid>

        </Grid>
)
}
