import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.background.default,
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const PrincipleCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
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

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AboutCard>
                <SectionHeader>
                  <InfoIcon color="primary" />
                  <Typography variant="h2">Our DNA</Typography>
                </SectionHeader>
                <Typography variant="body1" paragraph>
                  DuoBit represents a revolutionary approach to IT consulting. We've eliminated 
                  traditional corporate hierarchies and bureaucracy, replacing them with a 
                  self-organizing system based on transparency and mutual trust.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our organization operates on three fundamental principles: consultant autonomy, 
                  transparent operations, and a non-profit structure. This unique approach allows 
                  us to attract top talent while delivering exceptional value to our clients.
                </Typography>
                <Typography variant="body1">
                  Every aspect of our operation is guided by our commitment to consultant happiness 
                  and professional fulfillment. We believe that by creating an environment where 
                  consultants truly thrive, we naturally achieve excellence in client service.
                </Typography>
              </AboutCard>
            </Grid>

            {principles.map((principle, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PrincipleCard>
                  <IconWrapper>
                    {principle.icon}
                  </IconWrapper>
                  <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
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
                <Typography variant="h4" gutterBottom color="primary">
                  How We Work
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" paragraph>
                    • Consultants maintain complete independence, choosing their projects and workload
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • All financial and operational information is transparent to all members
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Decisions are made through consensus, with each consultant having equal input
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • We use the DuoBit Happiness Index as our primary metric for success
                  </Typography>
                  <Typography variant="body1">
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