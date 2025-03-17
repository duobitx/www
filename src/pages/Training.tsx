import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

const TrainingCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  padding: theme.spacing(4),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
  },
}));

const CardIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  '& .MuiSvgIcon-root': {
    fontSize: '32px',
  },
}));

const Training: React.FC = () => {
  const navigate = useNavigate();

  const trainingCategories = [
    {
      title: 'PostgreSQL Training',
      description: 'Comprehensive training programs covering PostgreSQL administration, optimization, and advanced features.',
      icon: <StorageIcon />,
      path: '/training/postgres',
    },
    {
      title: 'Security Training',
      description: 'Expert-led security training programs focusing on best practices, threat prevention, and secure development.',
      icon: <SecurityIcon />,
      path: '/training/security',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom align="center">
            Professional Training Programs
          </Typography>
          
          <Typography 
            variant="h5" 
            color="text.secondary" 
            align="center" 
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Enhance your team's expertise with our specialized training programs, 
            designed to deliver practical knowledge and hands-on experience.
          </Typography>

          <Grid container spacing={4}>
            {trainingCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={category.title}>
                <TrainingCard>
                  <CardContent sx={{ flexGrow: 1, p: 0 }}>
                    <CardIcon>
                      {category.icon}
                    </CardIcon>
                    <Typography variant="h4" gutterBottom>
                      {category.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {category.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate(category.path)}
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </TrainingCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Training; 