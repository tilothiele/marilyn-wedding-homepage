import { Container, Grid, Paper, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import {CalendarMonth, Diversity3, ContactSupport} from '@mui/icons-material';

const services = [
  {
    logo: (<CalendarMonth/>),
    titel: "Full Service Hochzeitsplanung",
    description: "Ich organisiere, plane und designe Eure Hochzeit zum Festpreis. Am Hochzeitstag bin ich selbstverständlich auch vor Ort und koordiniere alles, sodass ihr den Tag in vollsten Zügen genießen könnt. Exklusive Hochzeitsplanung in Hamburg und Umgebung"
  },
  {
    logo: (<Diversity3/>),
    titel: "Tagesbetreuung",
    description: "Ich begleite Euch am gesamten Tag Eurer Hochzeit, sodass ihr sie vollumfänglich genießen könnt. Die Koordination aller Dienstleister steht für mich an diesem Tag im Vordergrund, sodass Ihr euch ganz allein auf Euer Glück und Eure Liebsten konzentrieren könnt."
  },
  {
    logo: (<ContactSupport/>),
    titel: "Beratung",
    description: "Ich biete Euch einen kostenfreien Beratungstermin, bei dem wir uns gerne unverbindlich kennenlernen können. Es ist immer eine Entscheidung von beiden Seiten für die Zusammenarbeit. Wenn man so lange Hand in Hand geht, muss man sich einfach sympathisch sein, sonst macht die Planung für beide Seiten keinen Spaß. Ich freue mich auf einen Kaffee oder einen Anruf!"
  },
]
export default function Services() {
  return (
    <Container maxWidth="lg" id="service">
      <Grid container justifyContent="center" spacing={3} mt={4} mb={4}>
        {services.map(s => (
          <Grid item md={4}>
            <Card>
              <CardContent  style={{textAlign: 'center'}} >
                {s.logo}
                <Typography variant="h5">{s.titel}</Typography>
                <Typography variant="body2">{s.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
)
}
