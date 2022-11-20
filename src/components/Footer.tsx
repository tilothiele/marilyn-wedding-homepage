import { Button, Container, Grid, Link, MenuItem, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const grey_color = '#dadada'

//  footer: schwarzes Logo, impressum, datenschutzerklärung

const menuItems = [
    { name: "Impressum", url: '/impressum' },
    { name: "Datenschutzerklärung", url: '/dsgvo' },
]

export default function Footer() {
  return (
    <Grid container direction="column" flexDirection='row' style={{backgroundColor: grey_color}}>
        <Grid item ml={10} style={{marginRight: 'auto'}}>
            <Link href="/">
            <StaticImage alt="logo" src="../images/logos/marilyn-logo-grey.png" height={100}/>
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
