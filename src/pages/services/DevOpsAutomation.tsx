import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import MonitorIcon from '@mui/icons-material/Monitor';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
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

const DevOpsAutomation: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'CI/CD Implementation',
      description: 'Set up and optimize continuous integration and deployment pipelines.',
      icon: <CloudSyncIcon />,
      features: [
        'Pipeline automation',
        'Build optimization',
        'Deployment strategies',
        'Quality gates',
        'Release management',
      ],
    },
    {
      title: 'Infrastructure Automation',
      description: 'Automate infrastructure provisioning and management.',
      icon: <AutomationIcon />,
      features: [
        'Infrastructure as Code',
        'Configuration management',
        'Cloud automation',
        'Resource provisioning',
        'Environment management',
      ],
    },
    {
      title: 'Monitoring & Observability',
      description: 'Implement comprehensive monitoring and observability solutions.',
      icon: <MonitorIcon />,
      features: [
        'Metrics collection',
        'Log aggregation',
        'Alerting systems',
        'Performance monitoring',
        'Distributed tracing',
      ],
    },
    {
      title: 'Process Automation',
      description: 'Streamline and automate development and operational processes.',
      icon: <SettingsIcon />,
      features: [
        'Workflow automation',
        'Task automation',
        'Process optimization',
        'Tool integration',
        'Documentation automation',
      ],
    },
  ];

  return (
    <>
      <Breadcrumb />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconWrapper>
              <SettingsIcon />
            </IconWrapper>
            <Typography variant="h1" sx={{ ml: 2 }}>
              DevOps & Automation
            </Typography>
          </Box>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Implementation of modern DevOps practices and automation solutions.
            We help organizations streamline their development and operations processes.
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
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
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
            <Typography variant="h4" sx={{ mb: 3 }}>
              Ready to automate your processes?
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DevOpsAutomation; 