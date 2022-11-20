import { Box, Button, Grid, styled, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'react-router-dom';

const StyledSignature = styled(Typography)({
     fontFamily: "'Auto Signature'",
     fontSize: "3rem"
})

const StyledGridSection = styled(Grid)({
    backgroundColor: 'gray'
})
export default function IchBinSection() {
  return (
        <StyledGridSection container>
            <Grid item mx={5} mt={-5} mb={5} columns={4}>
                <StaticImage alt='Spielende Kinder auf der Hochzeitsfeier' src='../images/startseite/spielende-kinder.jpg' width={500}/>
                </Grid>
            <Grid item columns={3} maxWidth={500} mt={5}>
                <StyledSignature>
                    Mein Name ist Jessika Thiele.
                </StyledSignature>
                <Typography flexWrap='wrap'>
                    Ich bin Gründerin von Marilyn Wedding Events und mache
                    Eure Hochzeit zu einem unvergesslichen und einzigartigen Erlebnis für alle Beteiligten.
                </Typography>
                <Button component={Link} to="/contact" variant='outlined' sx={{color: 'white', borderColor: 'white', margin: 5}}>
                    Kontakt
                </Button>
            </Grid>
            <Grid item columns={4} mt={5}>
                <StaticImage alt='Jessika Thiele' src='../images/portrait-jessika/jessika-thiele-weisse-bluse.jpg' width={450}/>
            </Grid>
        </StyledGridSection>
  )
}
