import { Grid, Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const grey_color = '#dadada'

//  footer: schwarzes Logo, impressum, datenschutzerklärung

const menuItems = [
    { name: "Impressum", url: '/' },
    { name: "Datenschutzerklärung", url: '/dsgvo' },
    { name: "Kontakt", url: '/contact' },
]

export default function Footer() {
  return (
    <Grid container direction="column" flexDirection='row' style={{backgroundColor: grey_color}}>
        <Grid item ml={10} style={{marginRight: 'auto'}}>

        </Grid>

        {menuItems.map(m => <Grid item><MenuItem key={m.url}><Typography sx={{textTransform: 'uppercase'}}>{m.name}</Typography></MenuItem></Grid>)}

        <Grid item ml={10} style={{marginLeft: 'auto'}}>

        </Grid>
    </Grid>
)
}
