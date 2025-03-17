import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          align="center"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 500,
          }}
        >
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 