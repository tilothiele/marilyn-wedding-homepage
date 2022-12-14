import React from 'react'

import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';
import { Container, Paper, useMediaQuery } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const images = [
    'photo_2022-11-29_10-51-17.jpg', 'photo_2022-11-29_10-51-40.jpg',
    'photo_2022-11-29_10-51-50.jpg', 'photo_2022-11-29_10-52-00.jpg',
    'photo_2022-11-29_10-52-14.jpg', 'photo_2022-11-29_10-51-36.jpg',
    'photo_2022-11-29_10-51-54.jpg', 'photo_2022-11-29_10-52-18.jpg'
]

export function Head(props: HeadProps) {
    return (
      <SEO title='Impressionen'/>
    )
  }


export default function Index() {
    const prefix = '/masonry/'
    const two_col = useMediaQuery('(min-width:600px)');
    const three_col = useMediaQuery('(min-width:1200px)')

    const num_cols = three_col ? 3 : two_col ? 2 : 1;

    return (
        <Layout pageTitle="Impressionen">
            <Container>
                <Masonry columns={num_cols} spacing={2} sx={{mt: 2}}>
                    {images.map((item, index) => (
                    <div key={index}>
                        <img
                        src={`${prefix}${item}?w=162&auto=format`}
                        srcSet={`${prefix}${item}?w=162&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                        />
                    </div>
                    ))}
                </Masonry>
            </Container>
        </Layout>
    )
}
