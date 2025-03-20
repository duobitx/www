import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Divider, Paper, SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BoltIcon from '@mui/icons-material/Bolt';
import PetsIcon from '@mui/icons-material/Pets';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CircleIcon from '@mui/icons-material/Circle';

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& .section-icon': {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    transform: 'translateY(-8px)',
  },
}));

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

interface TrainingSectionProps {
  title: string;
  description: string;
  trainings: any[];
  duration: string;
  icon: typeof SvgIcon;
}

const Training: React.FC = () => {
  const navigate = useNavigate();

  const commonFeatures = [
    'Live demo with real-world examples',
    'Sample code and documentation',
    'Future learning resources and recommendations',
  ];

  const rapidTrainings = [
    {
      title: 'Postgres for Developers',
      description: 'What a good software developer should know about PostgreSQL.',
      icon: <StorageIcon />,
      path: '/training/rapid/postgres-for-developers',
    },
    {
      title: 'Postgres for DBAs',
      description: 'This training covers PostgreSQL administration.',
      icon: <StorageIcon />,
      path: '/training/rapid/postgres-for-dbas',
    },
    {
      title: 'Rapid Placeholder',
      description: 'Lorem ipsum jumped over the lazy brown dolor amet.',
      icon: <SecurityIcon />,
      path: '/training/rapid/security',
    },
  ];

  const blitzTrainings = [
    {
      title: 'Postgres SQL Language',
      description: 'Improve your SQL vocabulary. It pays off.',
      icon: <FlashOnIcon />,
      path: '/training/blitz/postgres-sql',
    },
    {
      title: 'Postgres Indexing',
      description: 'Intensive training on PostgreSQL indexing capabilities.',
      icon: <SpeedIcon />,
      path: '/training/blitz/postgres-indexing',
    },
    {
      title: 'Postgres Query Planner',
      description: 'Dive into query planner and EXPLAIN tool.',
      icon: <BoltIcon />,
      path: '/training/blitz/postgres-query-planner',
    },
    {
      title: 'Postgres Extensions',
      description: 'Let us guide you through the contemporary PostgreSQL Extensions landscape.',
      icon: <FlashOnIcon />,
      path: '/training/blitz/postgres-extensions',
    },
    {
      title: 'Blitz Placeholder',
      description: 'Lorem ipsum jumped over the lazy brown dolor amet.',
      icon: <SecurityIcon />,
      path: '/training/blitz/security',
    },
  ];

  const bulletTrainings = [
    {
      title: 'Postgres Monitoring',
      description: 'Overview of postgres monitoring and observability.',
      icon: <SpeedIcon />,
      path: '/training/bullet/pstgres-monitoring',
    },
    {
      title: 'JSON in Postgres',
      description: 'Developers love JSON, and we love developers. You too?',
      icon: <SpeedIcon />,
      path: '/training/bullet/postgres-json',
    },
    {
      title: 'Postgres Full-text search',
      description: 'A closer look at internal Postgres full-text search engine.',
      icon: <BoltIcon />,
      path: '/training/bullet/postgres-fts',
    },
    {
      title: 'Bullet Placeholder',
      description: 'Ipsum Something should be short and catchy.',
      icon: <SpeedIcon />,
      path: '/training/bullet/something',
    },
  ];

  const TrainingSection = ({ title, description, trainings, duration, icon: Icon }: TrainingSectionProps) => (
    <Box sx={{ mb: 8 }}>
      <SectionHeader>
        <Icon className="section-icon" />
        <Typography variant="h2" align="center">
          {title}
        </Typography>
      </SectionHeader>
      <Typography 
        variant="h6" 
        color="text.secondary" 
        align="center" 
        sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
      >
        {description}
      </Typography>
      <Typography 
        variant="subtitle1" 
        color="primary" 
        align="center" 
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Duration: {duration}
      </Typography>
      <Grid container spacing={4}>
        {trainings.map((training, index) => (
          <Grid item xs={12} md={6} key={training.title}>
            <TrainingCard>
              <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <CardIcon>
                  {training.icon}
                </CardIcon>
                <Typography variant="h4" gutterBottom>
                  {training.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {training.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {commonFeatures.map((feature, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate(training.path)}
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </TrainingCard>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 8 }} />
    </Box>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom align="center">
            DuoBit Trainings
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

          <TrainingSection 
            title="Rapid"
            description="Intensive journey into specific technology, product or solution. Includes hands-on demos of essential features."
            trainings={rapidTrainings}
            duration="4 hours"
            icon={PetsIcon}
          />

          <TrainingSection 
            title="Blitz"
            description="Focused training session for quick skill acquisition. Covers a single subsystem or component."
            trainings={blitzTrainings}
            duration="2 hours"
            icon={ElectricBoltIcon}
          />

          <TrainingSection 
            title="Bullet"
            description="Flash course focused on a single aspect or feature."
            trainings={bulletTrainings}
            duration="1 hour"
            icon={CircleIcon}
          />

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              mt: 8, 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(25, 118, 210, 0.05))'
            }}
          >
            <Typography variant="h3" gutterBottom>
              We fit Your Advancement
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Are you a <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>n00b</code> or a{' '}
              <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>webd3vil</code>?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
              We deliver above trainings in three variants, customized for different audience: Beginner, PowerUser and Architect. Relevant experience is a prerequisite.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Training; 