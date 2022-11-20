import { Container, Grid, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'


export default function ImpressionenSection() {
  return (
            <Grid container>
                <Grid item ml='auto' mr='auto'>
                    <Carousel height={300}>
                        <StaticImage src='https://picsum.photos/400/600' alt='curch' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/601' alt='beach' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/602' alt='ringe' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/603' alt='alt4' height={300}></StaticImage>
                        <StaticImage src='https://picsum.photos/400/604' alt='alt5' height={300}></StaticImage>
                    </Carousel>
                </Grid>
            </Grid>
    )
}
