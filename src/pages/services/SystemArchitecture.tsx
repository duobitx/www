import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
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

const SystemArchitecture: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Architecture Design',
      description: 'Design scalable and resilient system architectures for modern applications.',
      icon: <ArchitectureIcon />,
      features: [
        'System architecture design',
        'Technical documentation',
        'Architecture patterns',
        'Best practices implementation',
        'Technology stack selection',
      ],
    },
    {
      title: 'Microservices',
      description: 'Design and implementation of microservices-based architectures.',
      icon: <AccountTreeIcon />,
      features: [
        'Service decomposition',
        'API design',
        'Service mesh',
        'Container orchestration',
        'Distributed systems',
      ],
    },
    {
      title: 'Performance Engineering',
      description: 'Optimize system performance and scalability.',
      icon: <SpeedIcon />,
      features: [
        'Performance testing',
        'Scalability analysis',
        'Bottleneck identification',
        'Load balancing',
        'Caching strategies',
      ],
    },
    {
      title: 'Data Architecture',
      description: 'Design efficient and scalable data architectures.',
      icon: <StorageIcon />,
      features: [
        'Database design',
        'Data modeling',
        'Data flow optimization',
        'Storage solutions',
        'Data integration',
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
                <ArchitectureIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                System Architecture
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Design and implementation of scalable, resilient system architectures.
              We help organizations build robust and efficient technical foundations.
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
                Ready to Build a Solid Foundation?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your system architecture needs and how we can help create a robust technical foundation.
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

export default SystemArchitecture; 