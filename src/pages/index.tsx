import React from 'react'
import "typeface-cormorant";

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ImpressionenSection from '../components/ImpressionenSection';
import Layout from '../layouts/DefaultLayout';

export default function Index() {
  return (
    <Layout pageTitle="..">
      <HeroSection/>
      <ServicesSection/>
      <ImpressionenSection/>
    </Layout>
  )
}
