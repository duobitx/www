import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import AutomationIcon from '@mui/icons-material/Settings';
import AiIcon from '@mui/icons-material/Psychology';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServicesCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const ServicesList = styled(List)(({ theme }) => ({
  padding: 0,
}));

const ServiceItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(3),
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const ApproachCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  borderRadius: '100px',
  textTransform: 'none',
  fontSize: '1.125rem',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
  },
}));

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <BusinessIcon />,
      title: 'Fractional CTO',
      description: 'Strategic technology leadership and expertise without the overhead of a full-time CTO.',
      expertise: ['Technology Strategy', 'Digital Transformation', 'Technical Advisory', 'Team Development'],
      path: '/services/fractional-cto'
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud Infrastructure',
      description: 'Expert guidance in cloud architecture, migration, and optimization across major platforms.',
      expertise: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
      path: '/services/cloud-infrastructure'
    },
    {
      icon: <SecurityIcon />,
      title: 'Security Solutions',
      description: 'Advanced security implementations focusing on cloud-native and container security.',
      expertise: ['Cloud Security', 'Container Security', 'DevSecOps', 'Compliance'],
      path: '/services/security-solutions'
    },
    {
      icon: <AiIcon />,
      title: 'AI & Machine Learning',
      description: 'Implementation of AI solutions and ML pipelines for business optimization.',
      expertise: ['TensorFlow', 'PyTorch', 'MLOps', 'Data Science'],
      path: '/services/ai-machine-learning'
    },
    {
      icon: <CodeIcon />,
      title: 'Software Development',
      description: 'Modern software development with focus on cloud-native applications.',
      expertise: ['Microservices', 'React', 'Node.js', 'Python', 'Go'],
      path: '/services/software-development'
    },
    {
      icon: <ArchitectureIcon />,
      title: 'System Architecture',
      description: 'Design and implementation of scalable, resilient system architectures.',
      expertise: ['Distributed Systems', 'Microservices', 'Event-Driven Architecture'],
      path: '/services/system-architecture'
    },
    {
      icon: <AutomationIcon />,
      title: 'DevOps & Automation',
      description: 'Implementation of modern DevOps practices and automation solutions.',
      expertise: ['CI/CD', 'Infrastructure as Code', 'GitOps', 'Monitoring'],
      path: '/services/devops-automation'
    }
  ];

  const approaches = [
    {
      title: "Consultant-Led Engagement",
      description: "Direct collaboration with expert consultants who have complete autonomy and decision-making authority."
    },
    {
      title: "Transparent Pricing",
      description: "Clear, straightforward pricing with no hidden costs. 95% of your investment goes directly to the consultants."
    },
    {
      title: "Flexible Collaboration",
      description: "Work with our consultants on your terms - whether it's full-time engagement or specific project needs."
    }
  ];

  return (
    <ServicesSection id="services">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom align="center">
            Our Expertise
          </Typography>
          
          <Typography 
            variant="h5" 
            color="text.secondary" 
            align="center" 
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            We bring together top-tier experts from leading tech companies to deliver 
            excellence across a wide range of IT domains. Our consultants combine deep 
            technical expertise with practical experience from Fortune 500 companies.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ServicesCard>
                <ServicesList>
                  {services.map((service, index) => (
                    <ServiceItem key={index}>
                      <ListItemIcon>
                        <ServiceIcon>
                          {service.icon}
                        </ServiceIcon>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h4" gutterBottom>
                            {service.title}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body1" color="text.secondary" paragraph>
                              {service.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {service.expertise.map((tech, i) => (
                                <Typography
                                  key={i}
                                  variant="body2"
                                  sx={{
                                    color: 'primary.main',
                                    bgcolor: 'primary.lighter',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: '100px',
                                    fontSize: '0.875rem',
                                  }}
                                >
                                  {tech}
                                </Typography>
                              ))}
                            </Box>
                            <StyledButton
                              variant="contained"
                              color="primary"
                              onClick={() => navigate(service.path)}
                              endIcon={<ArrowForwardIcon />}
                              sx={{ mt: 2 }}
                            >
                              Learn More
                            </StyledButton>
                          </Box>
                        }
                      />
                    </ServiceItem>
                  ))}
                </ServicesList>
              </ServicesCard>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Our Approach
              </Typography>
              <Grid container spacing={3}>
                {approaches.map((approach, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <ApproachCard>
                      <Typography variant="h5" gutterBottom>
                        {approach.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {approach.description}
                      </Typography>
                    </ApproachCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services; 