import React from 'react';
import Contact from '../components/Contact';
import { Box } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Contact />
    </Box>
  );
};

export default ContactPage; 