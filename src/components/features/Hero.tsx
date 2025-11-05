'use client';

import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { AutoAwesome, Speed, TrendingUp, Security } from '@mui/icons-material';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, white 0%, transparent 50%)`,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: 100,
                  px: 2,
                  py: 0.5,
                  width: 'fit-content',
                }}
              >
                <AutoAwesome sx={{ fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  AI-Powered Automation2
                </Typography>
              </Box>
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Transform Your Workflow with{' '}
                <Box component="span" sx={{ color: '#fbbf24' }}>
                  AI Intelligence
                </Box>
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.5rem' },
                  fontWeight: 400,
                  opacity: 0.95,
                  lineHeight: 1.6,
                }}
              >
                Automate processes, connect tools, and unlock insights with our intelligent
                automation platform. Built for modern teams who value efficiency.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Speed sx={{ fontSize: 48, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                    10x
                  </Typography>
                  <Typography variant="body2">Faster Workflows</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    mt: 4,
                  }}
                >
                  <TrendingUp sx={{ fontSize: 48, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                    85%
                  </Typography>
                  <Typography variant="body2">Cost Reduction</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Security sx={{ fontSize: 48, mb: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Enterprise-Grade Security
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
