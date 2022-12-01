import { Button, Grid, Link, styled, Typography, useMediaQuery } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import KontaktMoeglichkeiten from './Kontaktmoeglichkeiten'

const StyledSignature = styled(Typography)({
     fontFamily: "'Auto Signature'",
     fontSize: "3rem"
})

const StyledGridSection = styled(Grid)({
    backgroundColor: 'gray'
})
export default function IchBinSection() {
    const matches = useMediaQuery('(min-width:1570px)');

    return (
        <StyledGridSection container mt={8}>
            {matches && <Grid item ml={5} mt={-5} mb={5} columns={4}>
                <StaticImage alt='Spielende Kinder auf der Hochzeitsfeier' src='../images/startseite/spielende-kinder.jpg' width={500}/>
            </Grid>}
            <Grid item columns={3} ml={5} maxWidth={500} mt={5} sx={{alignItems: 'center'}}>
                <StyledSignature>
                    Hallo mein Name ist Jessika.
                </StyledSignature>
                <Typography flexWrap='wrap'>
                    Ich bin Gründerin von Marilyn Wedding Events und mache
                    Eure Hochzeit zu einem unvergesslichen und einzigartigen Erlebnis für alle Beteiligten.
                </Typography>
                <KontaktMoeglichkeiten/>
                <Button component={Link} href="/contact" variant='outlined' sx={{color: 'white', borderColor: 'white', margin: 5}}>
                    Kontaktformular
                </Button>
            </Grid>
            <Grid item columns={4} mt={5} ml={5}>
                <StaticImage alt='Jessika Thiele' src='../images/portrait-jessika/jessika-thiele-weisse-bluse.jpg' width={450}/>
            </Grid>
        </StyledGridSection>
  )
}
