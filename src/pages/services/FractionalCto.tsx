import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import StrategyIcon from '@mui/icons-material/Lightbulb';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Breadcrumb from '../../components/Breadcrumb';

const FeatureCard = styled(Paper)(({ theme }) => ({
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

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const FractionalCto: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Strategic Technology Leadership",
      icon: <BusinessIcon />,
      description: "Expert guidance in technology strategy, roadmap development, and digital transformation initiatives.",
      features: [
        "Technology vision and roadmap development",
        "Digital transformation strategy",
        "Technology stack optimization",
        "Innovation and emerging technology assessment",
        "IT budget planning and optimization"
      ]
    },
    {
      title: "Technical Advisory",
      icon: <StrategyIcon />,
      description: "Seasoned advice on architecture decisions, technology selection, and implementation strategies.",
      features: [
        "Architecture review and recommendations",
        "Technology stack selection",
        "Security strategy and compliance",
        "Cloud migration strategy",
        "Technical debt assessment"
      ]
    },
    {
      title: "Team Development",
      icon: <EngineeringIcon />,
      description: "Build and optimize high-performing technical teams while establishing best practices and processes.",
      features: [
        "Technical team structure optimization",
        "Hiring strategy and technical assessment",
        "Engineering culture development",
        "Process improvement and automation",
        "Knowledge transfer and mentoring"
      ]
    },
    {
      title: "Performance Optimization",
      icon: <AssessmentIcon />,
      description: "Enhance technical operations and deliver measurable improvements in efficiency and quality.",
      features: [
        "Technical performance metrics",
        "Development process optimization",
        "Quality assurance improvement",
        "Infrastructure cost optimization",
        "Scalability planning"
      ]
    }
  ];

  return (
    <>
      <Breadcrumb />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconWrapper>
              <BusinessIcon />
            </IconWrapper>
            <Typography variant="h1" sx={{ ml: 2 }}>
              Fractional CTO
            </Typography>
          </Box>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Access strategic technology leadership and expertise without the overhead of a full-time CTO.
            Our fractional CTO service provides the guidance you need to make informed technology decisions
            and drive your business forward.
          </Typography>

          <Grid container spacing={4}>
            {services.map((service) => (
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
              Ready to elevate your technology strategy?
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

export default FractionalCto; 