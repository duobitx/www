import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
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

const CloudInfrastructure: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Expert guidance in planning and executing cloud migrations with minimal disruption.',
      icon: <CloudIcon />,
      features: [
        'Assessment and planning',
        'Workload migration',
        'Data migration',
        'Application modernization',
        'Post-migration optimization',
      ],
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure deployment and management using modern IaC tools.',
      icon: <StorageIcon />,
      features: [
        'Terraform implementation',
        'AWS CloudFormation',
        'Azure ARM templates',
        'Configuration management',
        'Version control integration',
      ],
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure and applications.',
      icon: <SecurityIcon />,
      features: [
        'Security architecture design',
        'Identity and access management',
        'Network security',
        'Compliance implementation',
        'Security monitoring',
      ],
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for performance and cost efficiency.',
      icon: <SpeedIcon />,
      features: [
        'Performance monitoring',
        'Cost optimization',
        'Resource scaling',
        'Load balancing',
        'Cache optimization',
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
                <CloudIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                Cloud Infrastructure
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Expert guidance in cloud architecture, migration, and optimization across major platforms.
              We help organizations build and maintain robust, scalable, and secure cloud infrastructure.
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
                Ready to Transform Your Cloud Infrastructure?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your cloud infrastructure needs and how we can help you achieve your goals.
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

export default CloudInfrastructure; 