import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataObjectIcon from '@mui/icons-material/DataObject';
import BarChartIcon from '@mui/icons-material/BarChart';
import StreamIcon from '@mui/icons-material/Stream';
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

const AiMachineLearning: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning solutions for business optimization and automation.',
      icon: <PsychologyIcon />,
      features: [
        'Predictive analytics',
        'Pattern recognition',
        'Classification systems',
        'Regression analysis',
        'Model optimization',
      ],
    },
    {
      title: 'MLOps Implementation',
      description: 'End-to-end MLOps implementation for streamlined ML lifecycle management.',
      icon: <DataObjectIcon />,
      features: [
        'ML pipeline automation',
        'Model versioning',
        'Continuous training',
        'Model monitoring',
        'Infrastructure automation',
      ],
    },
    {
      title: 'Data Science',
      description: 'Comprehensive data science services for insights and decision-making.',
      icon: <BarChartIcon />,
      features: [
        'Data analysis',
        'Statistical modeling',
        'Feature engineering',
        'Data visualization',
        'Exploratory data analysis',
      ],
    },
    {
      title: 'Deep Learning',
      description: 'Advanced deep learning solutions for complex problem-solving.',
      icon: <StreamIcon />,
      features: [
        'Neural networks',
        'Computer vision',
        'Natural language processing',
        'Reinforcement learning',
        'Transfer learning',
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
                <PsychologyIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                AI & Machine Learning
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Implementation of AI solutions and ML pipelines for business optimization.
              We help organizations leverage artificial intelligence and machine learning
              to solve complex problems and drive innovation.
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
                Ready to Transform Your Business with AI?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss how AI and machine learning can drive innovation in your organization.
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

export default AiMachineLearning; 