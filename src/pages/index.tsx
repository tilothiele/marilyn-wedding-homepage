import React from 'react'
import "typeface-cormorant";

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ImpressionenSection from '../components/ImpressionenSection';
import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';

export function Head(props: HeadProps) {
  return (
    <SEO title='Home'/>
  )
}

export default function Index() {
  return (
    <Layout pageTitle="..">
      <HeroSection/>
      <ServicesSection/>
      <ImpressionenSection/>
    </Layout>
  )
}
