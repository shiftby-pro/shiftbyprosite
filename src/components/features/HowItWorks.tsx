'use client';

import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import {
  AccountTree,
  Build,
  RocketLaunch,
  CheckCircle,
} from '@mui/icons-material';

const steps = [
  {
    icon: AccountTree,
    step: '01',
    title: 'Connect Your Tools',
    description:
      'Integrate your existing tools and services with just a few clicks. Support for UnifyPlane Core, n8n, Supabase, and 1000+ other platforms.',
  },
  {
    icon: Build,
    step: '02',
    title: 'Build Your Workflow',
    description:
      'Use our visual workflow builder to design automation flows. AI suggests optimizations and helps you create efficient processes.',
  },
  {
    icon: RocketLaunch,
    step: '03',
    title: 'Deploy & Monitor',
    description:
      'Launch your workflows with one click. Monitor performance in real-time with comprehensive analytics and alerts.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Optimize Continuously',
    description:
      'AI analyzes your workflows and provides actionable insights. Continuously improve efficiency and achieve better outcomes.',
  },
];

export default function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.875rem' }}
          >
            HOW IT WORKS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Simple. Powerful.{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Effective.
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Get started in minutes and transform your workflow in days
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.default',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      fontSize: '8rem',
                      fontWeight: 900,
                      color: 'rgba(0, 0, 0, 0.03)',
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </Box>
                  <Stack spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: 36, color: 'white' }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {step.description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
