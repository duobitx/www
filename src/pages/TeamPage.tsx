import React from 'react';
import Team from '../components/Team';
import { Box } from '@mui/material';

const TeamPage: React.FC = () => {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Team />
    </Box>
  );
};

export default TeamPage; 