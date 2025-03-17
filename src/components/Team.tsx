import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const MemberCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.primary.main}`,
}));

const LinkedInButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.primary.main,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: '#0077b5',
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
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const Team: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 'john-doe',
      name: 'John Doe',
      role: 'Senior Software Architect',
      image: 'https://media.licdn.com/dms/image/profile1.jpg',
      linkedIn: 'https://linkedin.com/in/johndoe',
    },
    {
      id: 'jane-smith',
      name: 'Jane Smith',
      role: 'Security Solutions Expert',
      image: 'https://media.licdn.com/dms/image/profile2.jpg',
      linkedIn: 'https://linkedin.com/in/janesmith',
    },
    {
      id: 'mike-johnson',
      name: 'Mike Johnson',
      role: 'AI & ML Specialist',
      image: 'https://media.licdn.com/dms/image/profile3.jpg',
      linkedIn: 'https://linkedin.com/in/mikejohnson',
    },
    {
      id: 'wojciech-marzec',
      name: 'Wojciech Marzec',
      role: 'AI/Data/CTO',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQEACFJokb583A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1555515549976?e=1747872000&v=beta&t=VFU7ft2JqvprdMZpgXEoj3vrAqW5xiPz3E3Imps2Lso',
      linkedIn: 'https://www.linkedin.com/in/wojciechmarzec',
    },
    {
      id: 'david-brown',
      name: 'David Brown',
      role: 'Cloud Infrastructure Lead',
      image: 'https://media.licdn.com/dms/image/profile5.jpg',
      linkedIn: 'https://linkedin.com/in/davidbrown',
    },
    {
      id: 'emily-davis',
      name: 'Emily Davis',
      role: 'System Architecture Consultant',
      image: 'https://media.licdn.com/dms/image/profile6.jpg',
      linkedIn: 'https://linkedin.com/in/emilydavis',
    },
  ];

  const handleMemberClick = (memberId: string) => {
    navigate(`/team/${memberId}`);
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLDivElement>, linkedIn: string) => {
    e.stopPropagation();
    window.open(linkedIn, '_blank', 'noopener');
  };

  return (
    <TeamSection>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconWrapper>
              <GroupsIcon />
            </IconWrapper>
            <Typography variant="h1" sx={{ ml: 2 }}>
              Our Team
            </Typography>
          </Box>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Meet our exceptional team of consultants who bring expertise, innovation, and dedication
            to every project they undertake.
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <MemberCard onClick={() => handleMemberClick(member.id)}>
                  <Box sx={{ position: 'relative', width: '100%' }}>
                    <StyledAvatar
                      alt={member.name}
                      src={member.image}
                    />
                    <LinkedInButton onClick={(e) => handleLinkedInClick(e, member.linkedIn)}>
                      <LinkedInIcon fontSize="large" />
                    </LinkedInButton>
                  </Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {member.role}
                  </Typography>
                </MemberCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </TeamSection>
  );
};

export default Team; 