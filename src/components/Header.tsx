import { Avatar, Box, Container, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

const petite_orchid_color = "#DD9D9D";

// Menü: Home Impressionen Blog Service Über uns Kontakt

const menuItems = [
    { name: "Home", url: '/' },
    { name: "Impressionen", url: '#impressionen' },
    { name: "Blog", url: '/blog' },
    { name: "Service", url: '#service' },
    { name: "Über uns", url: '/about' },
    { name: "Kontakt", url: '/contact' },
]

const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit'
}

export default function Header() {

  return (
        <Grid container direction="column" flexDirection='row' style={{backgroundColor: petite_orchid_color}}>
            <Grid item ml={10} style={{marginRight: 'auto'}}>
                <Link to='/'>
                <StaticImage src="../images/logos/marilyn-logo-pink.png" alt="marilyn-logo" height={100}/>
                </Link>
            </Grid>

            {menuItems.map(m => <Grid item sx={{marginTop: 'auto', marginBottom: 'auto'}}><MenuItem key={m.url}><Link to={m.url} style={linkStyle}><Typography sx={{textTransform: 'uppercase'}}>{m.name}</Typography></Link></MenuItem></Grid>)}

        </Grid>
)
}
