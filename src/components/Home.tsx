import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0, 6),
  backgroundColor: theme.palette.background.default,
}));

const InsightCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const MetricLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
}));

const PremiumTag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  backgroundColor: '#f5c67c',
  borderRadius: '4px',
  marginBottom: theme.spacing(2),
  '& .MuiTypography-root': {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#915907',
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
}));

const Home: React.FC = () => {
  return (
    <HeroSection id="home">
      <Container>
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

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Total Consultants</MetricLabel>
                <MetricValue>
                  5
                  <GroupIcon color="primary" />
                </MetricValue>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUpIcon /> 25% growth
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
                  <AutoGraphIcon color="success" />
                </MetricValue>
                <Typography variant="body2" color="text.secondary">
                  Freedom to choose work
                </Typography>
              </InsightCard>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <InsightCard>
                <MetricLabel>Revenue to Consultants</MetricLabel>
                <MetricValue>
                  95%
                  <TrendingUpIcon color="success" />
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
                  0.3
                  <AccessTimeIcon color="primary" />
                </MetricValue>
                <Typography variant="body2" color="text.secondary">
                  years
                </Typography>
              </InsightCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <InsightCard>
                  <Typography variant="h5" gutterBottom color="primary">
                    Key Differentiators
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                    <Typography component="li" variant="body1" paragraph>
                      No traditional employment - consultants maintain full independence
                    </Typography>
                    <Typography component="li" variant="body1" paragraph>
                      No managers or CEO - we rely on self-organization and transparency
                    </Typography>
                    <Typography component="li" variant="body1" paragraph>
                      Happiness-driven - DuoBit Happiness Index is our key metric
                    </Typography>
                    <Typography component="li" variant="body1" paragraph>
                      Non-profit approach - consultants keep most of what they earn
                    </Typography>
                    <Typography component="li" variant="body1">
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