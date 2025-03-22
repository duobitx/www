import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Divider, Paper, SvgIcon, Grid } from '@mui/material';
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
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& .section-icon': {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    transform: 'translateY(-8px)',
  },
}));

interface TrainingCardProps {
  cardSize: 'large' | 'medium' | 'small';
}

const TrainingCard = styled(Card)<TrainingCardProps>(({ theme, cardSize }) => {
  let padding, minHeight;
  if (cardSize === 'large') {
    padding = theme.spacing(4);
    minHeight = 300;
  } else if (cardSize === 'medium') {
    padding = theme.spacing(3);
    minHeight = 250;
  } else { // small
    padding = theme.spacing(2);
    minHeight = 200;
  }
  return {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out',
    padding: padding,
    minHeight: minHeight,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
    },
  };
});

interface TrainingSectionProps {
  title: string;
  description: string;
  features: string[];
  trainings: any[];
  duration: string;
  icon: typeof SvgIcon;
  trainingCardSize: 'large' | 'medium' | 'small';
}

const Training: React.FC = () => {
  const navigate = useNavigate();

  const rapidFeatures = [
    'Live demo with a real-world example',
    'Peer programming session',
    'Sample code and documentation',
    'Future learning resources and recommendations',
  ];

  const blitzFeatures = [
    'Live demo with a real-world example',
    'Sample code and documentation',
    'Future learning resources and recommendations',
  ];

  const bulletFeatures = [
    'Live demo with real-world examples',
    'Future learning resources and recommendations',
  ];

  const rapidTrainings = [
    {
      title: 'Postgres for Developers',
      description: 'What every software developer should know about PostgreSQL.',
      icon: <StorageIcon />,
      path: '/training/rapid/postgres-for-developers',
    },
    {
      title: 'Postgres for DBAs',
      description: 'This training covers PostgreSQL server administration.',
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

  const TrainingSection = ({ title, description, features, trainings, duration, icon: Icon, trainingCardSize }: TrainingSectionProps) => {
    // Compute the background image path based on the section title
    const bgImage = `/icon-${title.toLowerCase()}.png`;
    return (
      <Paper
        sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          mb: 8,
        }}
      >
        <SectionHeader>
          <Icon className="section-icon" />
          <Typography variant="h2">
            {title}
          </Typography>
        </SectionHeader>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: '800px' }}
        >
          {description}
        </Typography>
        <Typography
          variant="subtitle2"
          color="primary"
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Duration: {duration}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {features.map((feature, idx) => (
            <Typography key={idx} variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              • {feature}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={4}>
          {trainings.map((training) => (
            <Grid item xs={12} md={6} key={training.title}>
              <TrainingCard cardSize={trainingCardSize}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    opacity: 0.1,
                  }}
                />
                <CardContent sx={{ position: 'relative', zIndex: 1, flexGrow: 1, p: 0 }}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', mb: 2, background: `linear-gradient(135deg, theme.palette.primary.main, theme.palette.secondary.main)`, color: '#fff' }}>
                      {training.icon}
                    </Box>
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {training.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {training.description}
                  </Typography>
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
      </Paper>
    );
  };

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

          <TrainingSection
            title="Rapid"
            description="Intensive journey into a technology, product or solution."
            features={rapidFeatures}
            trainings={rapidTrainings}
            duration="4 hours"
            icon={PetsIcon}
            trainingCardSize="large"
          />

          <TrainingSection
            title="Blitz"
            description="Focused training session for quick skill acquisition. Covers a single subsystem or component."
            features={blitzFeatures}
            trainings={blitzTrainings}
            duration="2 hours"
            icon={ElectricBoltIcon}
            trainingCardSize="medium"
          />

          <TrainingSection
            title="Bullet"
            description="Flash training focused on a single aspect or feature."
            features={bulletFeatures}
            trainings={bulletTrainings}
            duration="1 hour"
            icon={CircleIcon}
            trainingCardSize="small"
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
              We Fit Your Advancement
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Are you a <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>n00b</code>
              or a <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>webd3vil</code>?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
              We deliver above trainings in three variants, customized for different audience: Beginner, Power User and Architect.
              Relevant experience is a prerequisite.
              Please use Contact page to learn more.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Training;