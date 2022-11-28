import React from 'react'

import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';
import { Container, Paper } from '@mui/material';
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
'photo_2022-11-28_13-29-52.jpg', 'photo_2022-11-28_13-33-31.jpg', 'photo_2022-11-28_13-34-09.jpg',
'photo_2022-11-28_13-32-36.jpg', 'photo_2022-11-28_13-33-35.jpg', 'photo_2022-11-28_13-34-13.jpg',
'photo_2022-11-28_13-32-46.jpg', 'photo_2022-11-28_13-33-39.jpg', 'photo_2022-11-28_13-34-17.jpg',
'photo_2022-11-28_13-32-53.jpg', 'photo_2022-11-28_13-33-43.jpg', 'photo_2022-11-28_13-34-20.jpg',
'photo_2022-11-28_13-32-57.jpg', 'photo_2022-11-28_13-33-46.jpg', 'photo_2022-11-28_13-34-25.jpg',
'photo_2022-11-28_13-33-02.jpg', 'photo_2022-11-28_13-33-50.jpg', 'photo_2022-11-28_13-34-29.jpg',
'photo_2022-11-28_13-33-07.jpg', 'photo_2022-11-28_13-33-52.jpg', 'photo_2022-11-28_13-34-32.jpg',
'photo_2022-11-28_13-33-11.jpg', 'photo_2022-11-28_13-33-56.jpg', 'photo_2022-11-28_13-34-36.jpg',
'photo_2022-11-28_13-33-23.jpg', 'photo_2022-11-28_13-34-02.jpg',
'photo_2022-11-28_13-33-27.jpg', 'photo_2022-11-28_13-34-06.jpg']

export function Head(props: HeadProps) {
    return (
      <SEO title='Impressionen'/>
    )
  }


export default function Index() {
    const prefix = '/masonry/'
    return (
        <Layout pageTitle="Impressionen">
            <Container>
                <Masonry columns={3} spacing={2} sx={{mt: 2}}>
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
