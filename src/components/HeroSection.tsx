import React from 'react'
import { Typography, Container, Grid, Paper, DividerClassKey, Zoom } from '@mui/material'
import { styled } from '@mui/system'
import { StaticImage } from 'gatsby-plugin-image'


const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Wrapper"
})({
    height: "80vh"
})

const overlayStyles = {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "80vh",
    width: "100%",
    position: "absolute",
    zIndex: 2
}

const beauty_bush_color = '#F1C0B9'
const font_family = "Cormorant Garamond"


export default function HeroSection() {

    return (
    <StyledPaper id='hero'>
        <StaticImage src="../images/hero/wedding-menue.jpg" alt="wedding-menue" style={{position: 'absolute', height: '80vh', width: '100%', zIndex: 1}}/>
        <div style={overlayStyles}/>
        <Container maxWidth="lg" style={{margin: 'auto', zIndex: 100, position: 'absolute'}}>
            <Grid container direction="column"
                alignItems="center"
                justifyContent="center">
                <Zoom in={true}>
                    <Grid item>
                        <Typography variant='h1' style={{color: beauty_bush_color}}>
                            Marilyn Wedding Events
                        </Typography>
                        <Typography variant='h4' style={{color: beauty_bush_color}}>
                            Exlusive Hochzeitsplanung in Hamburg Deutschland und in der Welt
                        </Typography>
                    </Grid>
                </Zoom>
            </Grid>
        </Container>
    </StyledPaper>
  )
}
