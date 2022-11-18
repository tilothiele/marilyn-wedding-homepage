import { Container, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'


export default function ImpressionenSection() {
  return (
    <Container maxWidth="lg">
        <Carousel>
            <StaticImage src='../images/impressions/istock-church.jpg' alt='curch' height={200}></StaticImage>
            <StaticImage src='../images/impressions/istock-beach.jpg' alt='beach' height={200}></StaticImage>
            <StaticImage src='../images/impressions/istock-ringe.jpg' alt='ringe' height={200}></StaticImage>
        </Carousel>
    </Container>
)
}
