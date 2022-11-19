import { Container, Grid, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'


export default function ImpressionenSection() {
  return (
    <Container maxWidth="lg" id='impressionen'>
        <Grid container>
            <Grid item ml='auto' mr='auto'>
                <Carousel>
                    <StaticImage src='../images/impressions/istock-church.jpg' alt='curch'></StaticImage>
                    <StaticImage src='../images/impressions/istock-beach.jpg' alt='beach'></StaticImage>
                    <StaticImage src='../images/impressions/istock-ringe.jpg' alt='ringe'></StaticImage>
                </Carousel>
        </Grid>
        </Grid>
    </Container>
)
}
