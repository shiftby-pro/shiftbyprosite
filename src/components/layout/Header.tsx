'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';
import Link from 'next/link';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Link
              href="/"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AutoAwesome color="primary" sx={{ fontSize: 32 }} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ShiftBy Pro
                </Typography>
              </Box>
            </Link>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button
                component={Link}
                href="#features"
                sx={{ color: 'text.primary', display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Features
              </Button>
              <Button
                component={Link}
                href="#how-it-works"
                sx={{ color: 'text.primary', display: { xs: 'none', sm: 'inline-flex' } }}
              >
                How It Works
              </Button>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
