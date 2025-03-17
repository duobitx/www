import React from 'react';
import About from '../components/About';
import { Box } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <About />
    </Box>
  );
};

export default AboutPage; 