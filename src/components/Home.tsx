import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0, 6),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(37, 99, 235, 0.1), transparent 50%)',
    zIndex: 0,
  },
}));

const InsightCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
  },
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const MetricLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  fontWeight: 500,
}));

const PremiumTag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.75, 1.5),
  backgroundColor: 'rgba(37, 99, 235, 0.1)',
  borderRadius: '100px',
  marginBottom: theme.spacing(3),
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    letterSpacing: '0.05em',
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(6),
  maxWidth: '800px',
  lineHeight: 1.7,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  borderRadius: '100px',
  textTransform: 'none',
  fontSize: '1.125rem',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateX(4px)',
  },
}));

const Home: React.FC = () => {
  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PremiumTag>
            <Typography>INNOVATIVE MODEL</Typography>
          </PremiumTag>
          
          <Typography variant="h1" gutterBottom>
            A Different Kind of Consulting
          </Typography>

          <IntroText>
            DuoBit is not your typical consulting company. We operate on principles of 
            self-organization, transparency, and consultant autonomy. Our main purpose 
            is to enable consultants to be happy, with strong revenue and delighted 
            customers as natural side effects.
          </IntroText>

          <StyledButton
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ mb: 6 }}
          >
            Learn More
          </StyledButton>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Total Consultants</MetricLabel>
                <MetricValue>
                  12
                  <GroupIcon />
                </MetricValue>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                    <TrendingUpIcon /> 50% growth
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    in last 6 months
                  </Typography>
                </Box>
              </InsightCard>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Consultant Autonomy</MetricLabel>
                <MetricValue>
                  100%
                  <AutoGraphIcon />
                </MetricValue>
                <Typography variant="body2" color="text.secondary">
                  Freedom to choose work
                </Typography>
              </InsightCard>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Consultants' Revenue</MetricLabel>
                <MetricValue>
                  95%
                  <TrendingUpIcon />
                </MetricValue>
                <Typography variant="body2" color="text.secondary">
                  Non-profit model
                </Typography>
              </InsightCard>
            </Grid>

            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Median Tenure</MetricLabel>
                <MetricValue>
                  24.5
                  <AccessTimeIcon />
                </MetricValue>
                <Typography variant="body2" color="text.secondary">
                  years
                </Typography>
              </InsightCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <InsightCard>
                  <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
                    Key Differentiators
                  </Typography>
                  <Box component="ul" sx={{ mt: 3, pl: 2 }}>
                    <Typography component="li" variant="body1" paragraph sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>•</Box>
                      No traditional employment - consultants maintain full independence
                    </Typography>
                    <Typography component="li" variant="body1" paragraph sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>•</Box>
                      No managers or CEO - we rely on self-organization and transparency
                    </Typography>
                    <Typography component="li" variant="body1" paragraph sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>•</Box>
                      Happiness-driven - DuoBit Happiness Index is our key metric
                    </Typography>
                    <Typography component="li" variant="body1" paragraph sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>•</Box>
                      Non-profit approach - consultants keep most of what they earn
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>•</Box>
                      100% consultant autonomy - work as much or as little as desired
                    </Typography>
                  </Box>
                </InsightCard>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </HeroSection>
  );
};

export default Home; 