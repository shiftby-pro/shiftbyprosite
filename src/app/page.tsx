'use client';

import { Box } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';
import Features from '@/components/features/Features';
import HowItWorks from '@/components/features/HowItWorks';
import CTA from '@/components/features/CTA';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main">
        <Hero />
        <Features />Hero Section
        <HowItWorks />
        <CTA />
      </Box>
      <Footer />
    </Box>
  );
}
