import React from 'react';
import Services from '../components/Services';
import { Box } from '@mui/material';

const ServicesPage: React.FC = () => {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Services />
    </Box>
  );
};

export default ServicesPage; 