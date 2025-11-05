'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
  Stack,
} from '@mui/material';
import { AutoAwesome, GitHub, Twitter, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <AutoAwesome color="primary" sx={{ fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                ShiftBy Pro
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              AI-driven workflow automation platform for modern businesses.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" aria-label="GitHub">
                <GitHub />
              </IconButton>
              <IconButton size="small" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton size="small" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Product
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={Link} href="#features" color="text.secondary" underline="hover">
                Features
              </MuiLink>
              <MuiLink component={Link} href="#pricing" color="text.secondary" underline="hover">
                Pricing
              </MuiLink>
              <MuiLink component={Link} href="#integrations" color="text.secondary" underline="hover">
                Integrations
              </MuiLink>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={Link} href="#docs" color="text.secondary" underline="hover">
                Documentation
              </MuiLink>
              <MuiLink component={Link} href="#blog" color="text.secondary" underline="hover">
                Blog
              </MuiLink>
              <MuiLink component={Link} href="#support" color="text.secondary" underline="hover">
                Support
              </MuiLink>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={Link} href="#about" color="text.secondary" underline="hover">
                About
              </MuiLink>
              <MuiLink component={Link} href="#careers" color="text.secondary" underline="hover">
                Careers
              </MuiLink>
              <MuiLink component={Link} href="#contact" color="text.secondary" underline="hover">
                Contact
              </MuiLink>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={Link} href="#privacy" color="text.secondary" underline="hover">
                Privacy
              </MuiLink>
              <MuiLink component={Link} href="#terms" color="text.secondary" underline="hover">
                Terms
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 4, pt: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} ShiftBy Pro. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
