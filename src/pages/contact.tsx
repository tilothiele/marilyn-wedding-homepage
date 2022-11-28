import React from 'react'

import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import TextField from '@mui/material/TextField';

export function Head(props: HeadProps) {
  return (
    <SEO title='Kontakt'/>
  )
}

type ContactType = {
    icon: ReactJSXElement,
    title: string,
    detail: string
}

const kontakte: ContactType[] = [
    {
        icon: (<LocalPhoneIcon/>),
        title: 'Telefon:',
        detail: '0176 55046878'
    },
    {
        icon: (<EmailIcon/>),
        title: 'EMail:',
        detail: 'info@marilyn-wedding-events.com'
    },
    {
        icon: (<InstagramIcon/>),
        title: 'Instagram:',
        detail: '@marilynwedding'
    },
]

export default function Index() {
  return (
    <Layout pageTitle="Kontakt">
      <Container>
      <Grid container>
            <Grid item ml={15} mt={5}>
                <Typography variant="h2">
                    Ich freue mich auf Euch
                </Typography>
                <Typography>
                    und auf Eure Geschichte.
                </Typography>
            </Grid>
        </Grid>
        <Grid container mb={10}>
            <Grid item mt={5} ml={-10} md={4}>
                <StaticImage alt="Jessika Thiele" src="../images/portrait-jessika/jessika-thiele-weisse-bluse.jpg" width={500}/>
                <Typography variant="h4" mt={3}>Kaffe? Mail? Anruf?</Typography>
                {kontakte.map(k => (
                    <Grid container mt={5} key={k.title}>
                        <Grid item mt={2}  ml={2} mr={2}>
                            <Box my='auto'>{k.icon}</Box>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{k.title}</Typography>
                            <Typography>{k.detail}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Grid item ml={15} mt={5} md={6}>
                <Typography variant="h5" mb={3}>Kontaktformular</Typography>
                <TextField id="standard-basic" label="Name" variant="standard" required fullWidth/>
                <TextField id="standard-basic" label="Email" variant="standard" required fullWidth/>
                <TextField id="standard-basic" label="Eventdatum" variant="standard" fullWidth/>
                <TextField id="standard-basic" label="Anfragetext" variant="standard" rows={4} multiline required fullWidth/>
                <Button variant='outlined' sx={{color: 'grey', borderColor: 'grey', margin: 5}}>Senden</Button>
            </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
