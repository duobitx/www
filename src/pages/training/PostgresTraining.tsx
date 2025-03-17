import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

const PostgresTraining: React.FC = () => {
  const navigate = useNavigate();

  const trainingModules = [
    {
      title: 'PostgreSQL Fundamentals',
      description: 'Learn the basics of PostgreSQL, including installation, configuration, and basic operations.',
      topics: [
        'Installation and setup',
        'Basic SQL operations',
        'Data types and schemas',
        'User management',
        'Backup and restore basics',
      ],
    },
    {
      title: 'Advanced Administration',
      description: 'Deep dive into PostgreSQL administration, performance tuning, and maintenance.',
      topics: [
        'Performance optimization',
        'Indexing strategies',
        'Partitioning',
        'Replication setup',
        'Monitoring and maintenance',
      ],
    },
    {
      title: 'Security and Compliance',
      description: 'Comprehensive security training covering authentication, authorization, and compliance requirements.',
      topics: [
        'Authentication methods',
        'Role-based access control',
        'Row-level security',
        'Audit logging',
        'Security best practices',
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
                <StorageIcon />
              </IconWrapper>
              <Typography variant="h1" sx={{ ml: 2 }}>
                PostgreSQL Training
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
              Comprehensive training programs designed to make your team PostgreSQL experts. 
              From basic operations to advanced administration and security.
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
                Ready to Get Started?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Contact us to discuss your team's specific needs and schedule a training session.
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

export default PostgresTraining; 