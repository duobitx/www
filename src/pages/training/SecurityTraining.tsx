import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
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

const SecurityTraining: React.FC = () => {
  const navigate = useNavigate();

  const trainingModules = [
    {
      title: 'Security Fundamentals',
      description: 'Learn the basics of information security, including threat modeling and risk assessment.',
      topics: [
        'Security principles and concepts',
        'Threat modeling',
        'Risk assessment',
        'Security policies and procedures',
        'Incident response basics',
      ],
    },
    {
      title: 'Application Security',
      description: 'Comprehensive training on securing applications and preventing common vulnerabilities.',
      topics: [
        'OWASP Top 10',
        'Secure coding practices',
        'Authentication and authorization',
        'Input validation',
        'Security testing methodologies',
      ],
    },
    {
      title: 'Infrastructure Security',
      description: 'Advanced training on securing infrastructure and implementing security controls.',
      topics: [
        'Network security',
        'Cloud security',
        'Container security',
        'Access control systems',
        'Security monitoring and logging',
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
                Security Training
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Comprehensive security training programs designed to enhance your team's 
              security awareness and technical expertise. From basic concepts to advanced 
              security implementations.
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
              {trainingModules.map((module, index) => (
                <Grid item xs={12} md={4} key={module.title}>
                  <FeatureCard>
                    <Typography variant="h5" gutterBottom>
                      {module.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {module.description}
                    </Typography>
                    <List>
                      {module.topics.map((topic) => (
                        <ListItem key={topic}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={topic} />
                        </ListItem>
                      ))}
                    </List>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="h4" gutterBottom>
                Ready to Strengthen Your Security?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your team's security training needs and schedule a session.
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

export default SecurityTraining; 