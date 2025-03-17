import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import AutomationIcon from '@mui/icons-material/Settings';
import AiIcon from '@mui/icons-material/Psychology';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ConsultingIcon from '@mui/icons-material/Group';

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServicesCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
}));

const ServicesList = styled(List)(({ theme }) => ({
  padding: 0,
}));

const ServiceItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  '& svg': {
    fontSize: 20,
    color: theme.palette.common.white,
  },
}));

const ApproachCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const Services: React.FC = () => {
  const services = [
    {
      icon: <CloudIcon />,
      title: 'Cloud Infrastructure',
      description: 'Expert guidance in cloud architecture, migration, and optimization across major platforms.',
      expertise: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker']
    },
    {
      icon: <SecurityIcon />,
      title: 'Security Solutions',
      description: 'Advanced security implementations focusing on cloud-native and container security.',
      expertise: ['Cloud Security', 'Container Security', 'DevSecOps', 'Compliance']
    },
    {
      icon: <AiIcon />,
      title: 'AI & Machine Learning',
      description: 'Implementation of AI solutions and ML pipelines for business optimization.',
      expertise: ['TensorFlow', 'PyTorch', 'MLOps', 'Data Science']
    },
    {
      icon: <CodeIcon />,
      title: 'Software Development',
      description: 'Modern software development with focus on cloud-native applications.',
      expertise: ['Microservices', 'React', 'Node.js', 'Python', 'Go']
    },
    {
      icon: <ArchitectureIcon />,
      title: 'System Architecture',
      description: 'Design and implementation of scalable, resilient system architectures.',
      expertise: ['Distributed Systems', 'Microservices', 'Event-Driven Architecture']
    },
    {
      icon: <AutomationIcon />,
      title: 'DevOps & Automation',
      description: 'Implementation of modern DevOps practices and automation solutions.',
      expertise: ['CI/CD', 'Infrastructure as Code', 'GitOps', 'Monitoring']
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
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ServicesCard>
                <Typography variant="h2" gutterBottom>
                  Our Expertise
                </Typography>
                <Typography variant="body1" paragraph>
                  We bring together top-tier experts from leading tech companies to deliver 
                  excellence across a wide range of IT domains. Our consultants combine deep 
                  technical expertise with practical experience from Fortune 500 companies.
                </Typography>
                <ServicesList>
                  {services.map((service, index) => (
                    <ServiceItem key={index}>
                      <ListItemIcon>
                        <ServiceIcon>
                          {service.icon}
                        </ServiceIcon>
                      </ListItemIcon>
                      <ListItemText
                        primary={service.title}
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {service.description}
                            </Typography>
                            <Typography variant="body2" color="primary">
                              Expertise: {service.expertise.join(' • ')}
                            </Typography>
                          </>
                        }
                        primaryTypographyProps={{
                          variant: 'h6',
                          gutterBottom: true,
                        }}
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
                      <Typography variant="h6" gutterBottom>
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