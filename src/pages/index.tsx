import React from 'react'
import "typeface-cormorant";

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Layout from '../layouts/DefaultLayout';
import type { HeadProps } from "gatsby"
import { SEO } from '../components/SEO';
import IchBinSection from '../components/IchBinSection';

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
      <IchBinSection/>
    </Layout>
  )
}
