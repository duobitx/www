import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Breadcrumb from '../../components/Breadcrumb';

const MemberSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const ProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 240,
  height: 240,
  border: `4px solid ${theme.palette.primary.main}`,
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    width: 180,
    height: 180,
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
}));

const TeamMember: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();

  // This would typically come from an API or database
  const teamMembers = {
    'john-doe': {
      name: 'John Doe',
      role: 'Senior Software Architect',
      image: 'https://media.licdn.com/dms/image/profile1.jpg',
      linkedIn: 'https://linkedin.com/in/johndoe',
      email: 'john.doe@duobit.io',
      bio: 'John is a seasoned software architect with over 15 years of experience in designing and implementing large-scale distributed systems. He specializes in cloud-native architectures and microservices.',
      expertise: [
        'Cloud Architecture',
        'Microservices',
        'Distributed Systems',
        'System Design',
        'Technical Leadership',
      ],
      projects: [
        'Led the migration of a monolithic application to microservices architecture',
        'Designed and implemented a real-time data processing pipeline',
        'Architected a multi-region cloud infrastructure for high availability',
      ],
    },
    'wojciech-marzec': {
      name: 'Wojciech Marzec',
      role: 'AI/Data/CTO',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQEACFJokb583A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1555515549976?e=1747872000&v=beta&t=VFU7ft2JqvprdMZpgXEoj3vrAqW5xiPz3E3Imps2Lso',
      linkedIn: 'https://www.linkedin.com/in/wojciechmarzec',
      email: 'wojciech.marzec@duobit.io',
      bio: 'John is a seasoned architect, data engineer and CTO with over 22 years of experience in designing and implementing large-scale systems.',
      expertise: [
        'Data Engineering',
        'System Design',
        'Technical Leadership',
        'Fractional CTO',
      ],
      projects: [
        'Architect of Delta Airlines core message bus migration to Kafka',
        'CTO of a software house (x3)',
        'Architected a multi-region cloud infrastructure for high availability',
      ],
    },
    // Add other team members here...
  };

  const member = teamMembers[memberId as keyof typeof teamMembers];

  if (!member) {
    return (
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4">Team member not found</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/team')}
            sx={{ mt: 2 }}
          >
            Back to Team
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Breadcrumb />
      <MemberSection>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ProfileCard>
                <Box sx={{ textAlign: 'center' }}>
                  <LargeAvatar
                    alt={member.name}
                    src={member.image}
                  />
                  <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>
                  <SocialButton
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedInIcon />}
                    fullWidth
                    onClick={() => window.open(member.linkedIn, '_blank', 'noopener')}
                  >
                    Connect on LinkedIn
                  </SocialButton>
                  <SocialButton
                    variant="outlined"
                    color="primary"
                    startIcon={<EmailIcon />}
                    fullWidth
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    Send Email
                  </SocialButton>
                </Box>
              </ProfileCard>
            </Grid>
            <Grid item xs={12} md={8}>
              <ProfileCard>
                <Typography variant="h4" gutterBottom color="primary">
                  About
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  {member.bio}
                </Typography>

                <Typography variant="h4" gutterBottom color="primary" sx={{ mt: 4 }}>
                  Areas of Expertise
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {member.expertise.map((item, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="text.secondary"
                      sx={{ '&:before': { content: '"• "' }, mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h4" gutterBottom color="primary">
                  Notable Projects
                </Typography>
                <Box>
                  {member.projects.map((project, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="text.secondary"
                      sx={{ '&:before': { content: '"• "' }, mb: 1 }}
                    >
                      {project}
                    </Typography>
                  ))}
                </Box>
              </ProfileCard>
            </Grid>
          </Grid>
        </Container>
      </MemberSection>
    </>
  );
};

export default TeamMember; 