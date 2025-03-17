import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const PrincipleCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  fontSize: '1.1rem',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.15)',
  },
}));

const About: React.FC = () => {
  const principles = [
    {
      icon: <AutorenewIcon />,
      title: "Self-Organization",
      description: "We operate without traditional management structures. Decisions are made through consensus and transparency, with each consultant having equal say in the organization's direction."
    },
    {
      icon: <AccountBalanceIcon />,
      title: "Non-Profit Model",
      description: "Our unique non-profit structure ensures that consultants receive the maximum value for their work. We maintain minimal operational costs and distribute 95% of revenue directly to consultants."
    },
    {
      icon: <EmojiEventsIcon />,
      title: "Happiness-Driven",
      description: "Success at DuoBit is measured primarily through consultant happiness. We believe that happy consultants naturally lead to excellent work and satisfied clients."
    }
  ];

  const handleDnaClick = () => {
    window.open('https://duobitx.github.io/duobit-dna/docs/index.html', '_blank', 'noopener');
  };

  return (
    <AboutSection>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconWrapper>
              <InfoIcon />
            </IconWrapper>
            <Typography variant="h1" sx={{ ml: 2 }}>
              About Us
            </Typography>
          </Box>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            DuoBit represents a revolutionary approach to IT consulting. We've eliminated 
            traditional corporate hierarchies and bureaucracy, replacing them with a 
            self-organizing system based on transparency and mutual trust.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AboutCard>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our organization operates on three fundamental principles: consultant autonomy, 
                  transparent operations, and a non-profit structure. This unique approach allows 
                  us to attract top talent while delivering exceptional value to our clients.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Every aspect of our operation is guided by our commitment to consultant happiness 
                  and professional fulfillment. We believe that by creating an environment where 
                  consultants truly thrive, we naturally achieve excellence in client service.
                </Typography>
                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={handleDnaClick}
                  endIcon={<OpenInNewIcon />}
                >
                  Learn More About Our DNA
                </StyledButton>
              </AboutCard>
            </Grid>

            {principles.map((principle, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PrincipleCard>
                  <IconWrapper>
                    {principle.icon}
                  </IconWrapper>
                  <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                    {principle.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {principle.description}
                  </Typography>
                </PrincipleCard>
              </Grid>
            ))}

            <Grid item xs={12}>
              <AboutCard>
                <Typography variant="h4" sx={{ mb: 3 }} color="primary">
                  How We Work
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    • Consultants maintain complete independence, choosing their projects and workload
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    • All financial and operational information is transparent to all members
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    • Decisions are made through consensus, with each consultant having equal input
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    • We use the DuoBit Happiness Index as our primary metric for success
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    • Our GitHub-based Code of Conduct ensures clear and fair collaboration
                  </Typography>
                </Box>
              </AboutCard>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 