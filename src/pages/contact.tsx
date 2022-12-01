import React from 'react'

import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';
import { Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import TextField from '@mui/material/TextField';
import { useForm } from '@formspree/react';
import KontaktMoeglichkeiten from '../components/Kontaktmoeglichkeiten';

export function Head(props: HeadProps) {
  return (
    <SEO title='Kontakt'/>
  )
}


const FORM_SPREE_FORM_ID = 'xyyvqzzp';

function ContactForm() {
    const [state, handleSubmit] = useForm(FORM_SPREE_FORM_ID);
    if (state.succeeded) {
      return <div>Vielen Dank für Ihre Kontaktanfrage! Ich werde mich schnellstmöglich mit Ihnen in Verbindung setzen. Das kann 1-2 Tage dauern.</div>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Name" name='Name' variant="standard" required fullWidth/>
        <TextField id="standard-basic" label="Email" name='Email' variant="standard" required fullWidth/>
        <TextField id="standard-basic" label="Eventdatum" name='EventDatum' variant="standard" fullWidth/>
        <TextField id="standard-basic" label="Anfragetext" name='Anfragetext' variant="standard" rows={4} multiline required fullWidth/>
        <Button variant='outlined' type='submit' sx={{color: 'grey', borderColor: 'grey', margin: 5}}>Senden</Button>
      </form>
    )
}


export default function Index() {
    const matches = useMediaQuery('(min-width:1000px)');
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
            <Grid item mt={5} ml={0} md={5}>
                <StaticImage alt="Jessika Thiele" src="../images/portrait-jessika/jessika-thiele-weisse-bluse.jpg" width={500}/>
                <Typography variant="h4" mt={3}>Anruf? Coffee? WhatsApp?</Typography>
                <KontaktMoeglichkeiten/>
            </Grid>
            <Grid item ml={5} mt={5} md={5}>
                <Typography variant="h5" mb={3}>Kontaktformular</Typography>
                <ContactForm/>
            </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
