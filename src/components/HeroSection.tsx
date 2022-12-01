import React from 'react'
import { Typography, Container, Grid, Paper, DividerClassKey, Zoom, Hidden, Box } from '@mui/material'
import { styled } from '@mui/system'
import { StaticImage } from 'gatsby-plugin-image'


const StyledOverlay = styled(Box, {
    name: "Overlay",
})({
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "90vh",
    width: "100%",
    position: "absolute",
    zIndex: 2
})

const StyledContainer = styled(Container, {
    height: "100%"
})

const StyledContentGrid = styled(Grid, {
    height: "90vh",
    zIndex: 100,
    position: "relative"
})

const beauty_bush_color = '#F1C0B9'
//const beauty_bush_color = 'white'


export default function HeroSection() {

    return (
    <Paper sx={{ height: "90vh", position: "relative"}} id='hero'>
        <StaticImage
            src="../images/hero/wedding-menue.jpg"
            alt="Marilyn Wedding Events"
            style={{ position: "absolute",height: "90vh",
            width: "100%",
            zIndex: 1 }}
        />
        <StyledOverlay/>
        <Container sx={{height: "90vh"}} maxWidth={true}>
            <Grid
                container
                sx={{   height: "90vh",
                zIndex: 100,
                position: "relative"
            }}
            >
                <Grid item sm={10} mt='auto' mr='auto' mb={10} ml={5}>
                   <Typography variant='h2' component="h1" style={{color: beauty_bush_color}}>
                        Marilyn Wedding Events
                    </Typography>
                    <Typography variant='h4' style={{color: beauty_bush_color}}>
                        Exlusive Hochzeitsplanung in Hamburg, Deutschland und in der Welt
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

