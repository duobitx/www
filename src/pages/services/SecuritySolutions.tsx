import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import BugReportIcon from '@mui/icons-material/BugReport';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
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

const SecuritySolutions: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Application Security',
      description: 'Comprehensive security assessment and implementation for applications.',
      icon: <ShieldIcon />,
      features: [
        'Security architecture review',
        'Code security analysis',
        'Vulnerability assessment',
        'Security testing',
        'Security best practices implementation',
      ],
    },
    {
      title: 'Cloud Security',
      description: 'Advanced security solutions for cloud environments and infrastructure.',
      icon: <SecurityIcon />,
      features: [
        'Cloud security architecture',
        'Identity and access management',
        'Data protection',
        'Network security',
        'Compliance frameworks',
      ],
    },
    {
      title: 'Security Testing',
      description: 'Comprehensive security testing and vulnerability assessment services.',
      icon: <BugReportIcon />,
      features: [
        'Penetration testing',
        'Security audits',
        'Vulnerability scanning',
        'Risk assessment',
        'Security monitoring',
      ],
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with security standards and regulations.',
      icon: <VerifiedUserIcon />,
      features: [
        'Compliance assessment',
        'Policy development',
        'Security controls implementation',
        'Audit preparation',
        'Documentation and reporting',
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
                <SecurityIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                Security Solutions
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Advanced security implementations focusing on cloud-native and container security.
              We help organizations build and maintain robust security postures.
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
                Ready to Enhance Your Security?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your security needs and how we can help protect your organization.
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

export default SecuritySolutions; 