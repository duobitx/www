import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
}));

const SoftwareDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      icon: <WebIcon />,
      features: [
        'React/Next.js applications',
        'Node.js backend services',
        'Progressive Web Apps',
        'Responsive design',
        'Performance optimization',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile application development.',
      icon: <PhoneIphoneIcon />,
      features: [
        'React Native development',
        'Native iOS/Android',
        'Mobile-first design',
        'App store deployment',
        'Performance optimization',
      ],
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure backend services and APIs.',
      icon: <CodeIcon />,
      features: [
        'RESTful APIs',
        'GraphQL services',
        'Microservices architecture',
        'Database design',
        'API documentation',
      ],
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of different systems and services.',
      icon: <IntegrationInstructionsIcon />,
      features: [
        'API integration',
        'Third-party services',
        'Legacy system integration',
        'Data migration',
        'Integration testing',
      ],
    },
  ];

  return (
    <>
      <Breadcrumb />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <IconWrapper>
                <CodeIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                Software Development
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Modern software development with focus on cloud-native applications.
              We build scalable, secure, and maintainable solutions using cutting-edge technologies.
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={service.title}>
                  <FeatureCard>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <IconWrapper>
                        {service.icon}
                      </IconWrapper>
                      <Typography variant="h4" sx={{ ml: 2 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="h4" gutterBottom>
                Ready to Build Something Amazing?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your software development needs and how we can help bring your ideas to life.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default SoftwareDevelopment; 