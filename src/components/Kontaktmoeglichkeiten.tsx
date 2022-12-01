import React from 'react'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import { Box, Grid, Typography } from '@mui/material';

type ContactType = {
    icon: ReactJSXElement,
    title?: string,
    detail: string
}

const kontakte: ContactType[] = [
    {
        icon: (<LocalPhoneIcon/>),
        detail: '0176 55046878'
    },
    {
        icon: (<EmailIcon/>),
        detail: 'info@marilyn-wedding-events.com'
    },
    {
      icon: (<InstagramIcon/>),
      title: 'Instagram:',
      detail: '@marilynwedding'
  },
  {
    icon: (<WhatsAppIcon/>),
    title: 'WhatsApp:',
    detail: '+491601516406'
},
]

export default function KontaktMoeglichkeiten() {
  return (
    <>
      {kontakte.map(k => (
          <Grid container mt={5} key={k.title}>
              <Grid item  ml={2} mr={2}>
                  <Box my='auto'>{k.icon}</Box>
              </Grid>
              <Grid item>
                  <Typography>{k.title} {k.detail}</Typography>
              </Grid>
          </Grid>
      ))}
    </>
  )
}
