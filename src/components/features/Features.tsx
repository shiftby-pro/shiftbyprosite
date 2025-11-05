'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import {
  AutoAwesome,
  IntegrationInstructions,
  Analytics,
  CloudSync,
  Psychology,
  Timeline,
} from '@mui/icons-material';

const features = [
  {
    icon: AutoAwesome,
    title: 'AI-Powered Automation',
    description:
      'Leverage advanced AI to automatically optimize your workflows, predict bottlenecks, and suggest improvements in real-time.',
  },
  {
    icon: IntegrationInstructions,
    title: 'Seamless Integrations',
    description:
      'Connect with 1000+ tools including n8n, Supabase, and UnifyPlane Core. Build custom integrations with our flexible API.',
  },
  {
    icon: Analytics,
    title: 'Real-Time Analytics',
    description:
      'Get actionable insights with comprehensive dashboards. Track KPIs, measure performance, and make data-driven decisions.',
  },
  {
    icon: CloudSync,
    title: 'Cloud-Native Architecture',
    description:
      'Built on modern cloud infrastructure for maximum reliability, scalability, and performance. 99.9% uptime guaranteed.',
  },
  {
    icon: Psychology,
    title: 'Smart Recommendations',
    description:
      'AI analyzes your workflow patterns and suggests optimizations, helping you work smarter and achieve better outcomes.',
  },
  {
    icon: Timeline,
    title: 'Visual Workflow Builder',
    description:
      'Design complex automation workflows with our intuitive drag-and-drop interface. No coding required.',
  },
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.875rem' }}
          >
            FEATURES
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Everything You Need to{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Succeed
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Powerful features designed to streamline your operations and boost productivity
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 32, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
