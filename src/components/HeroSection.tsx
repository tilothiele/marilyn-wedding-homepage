import React from 'react'
import { Typography, Container, Grid, Paper, DividerClassKey, Zoom, Hidden, Box } from '@mui/material'
import { styled } from '@mui/system'
import { StaticImage } from 'gatsby-plugin-image'
import Carousel from 'react-material-ui-carousel'

                    <Carousel height={300}>
                        <StaticImage src='https://picsum.photos/400/600' alt='curch' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/601' alt='beach' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/602' alt='ringe' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/603' alt='alt4' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/604' alt='alt5' height={300}></StaticImage>
                    </Carousel>


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

/* <StaticImage
src="../images/hero/wedding-menue.jpg"
alt="Marilyn Wedding Events"
style={{ position: "absolute",height: "90vh",
width: "100%",
zIndex: 1 }}
/> */

export default function HeroSection() {

    return (
    <Paper sx={{ height: "90vh", position: "relative"}} id='hero'>
        <Carousel height="90vh" sx={{ position: "absolute",height: "90vh",
            width: "100%",
            zIndex: 1 }}>
            <StaticImage src="../images/hero/wedding-menue.jpg" alt="Marilyn Wedding Events - Hochzeitsmenü" layout='fullWidth'></StaticImage>
            <StaticImage src="../images/hero/photo_2022-11-29_10-51-46.jpg" alt="Marilyn Wedding Events - Brautstrauß" layout='fullWidth'></StaticImage>
            <StaticImage src="../images/hero/photo_2022-11-29_10-52-09.jpg" alt="Marilyn Wedding Events - Hochzeitsreise" layout='fullWidth'></StaticImage>
        </Carousel>
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

