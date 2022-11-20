import { Grid, Link, MenuItem, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

const petite_orchid_color = "#DD9D9D";

// Menü: Home Impressionen Blog Service Über uns Kontakt

const menuItems = [
    { name: "Home", url: '/' },
    { name: "Impressionen", url: '/#impressionen' },
    { name: "Service", url: '/#service' },
    { name: "Über mich", url: '/about' },
    { name: "Kontakt", url: '/contact' },
]


export default function Header() {
//    const theme = useTheme();
  return (
        <Grid container direction="column" flexDirection='row' style={{backgroundColor: petite_orchid_color}} pl={10}>
            <Grid item ml={10} style={{marginRight: 'auto'}}>
                <Link href='/'>
                <StaticImage src="../images/logos/marilyn-logo-pink.png" alt="marilyn-logo" height={100}/>
                </Link>
            </Grid>

            {menuItems.map(m => (
                    <MenuItem key={m.url}>
                        <Link href={m.url} underline='none' color='inherit'>
                            <Typography sx={{textTransform: 'uppercase'}}>{m.name}</Typography>
                        </Link>
                    </MenuItem>
            ))}

            <Grid item ml={10} style={{marginLeft: 'auto'}}>

            </Grid>

        </Grid>
)
}
