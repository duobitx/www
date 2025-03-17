import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
  },
}));

const ContactMethod = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  borderRadius: '100px',
  textTransform: 'none',
  fontSize: '1.125rem',
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
  },
}));

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom align="center">
            Get in Touch
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            align="center" 
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Have a question or want to work together? We'd love to hear from you.
            Reach out to us using any of the methods below.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ContactInfo>
                <ContactMethod>
                  <IconWrapper>
                    <EmailIcon />
                  </IconWrapper>
                  <Typography variant="h4" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    contact@duobit.pl
                  </Typography>
                </ContactMethod>
                <ContactMethod>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                  <Typography variant="h4" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    +48 123 456 789
                  </Typography>
                </ContactMethod>
              </ContactInfo>
            </Grid>
            <Grid item xs={12} md={8}>
              <ContactCard>
                <Typography variant="h4" gutterBottom color="primary">
                  Send us a Message
                </Typography>
                <ContactForm onSubmit={handleSubmit}>
                  <StyledTextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <StyledTextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <StyledTextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <SubmitButton 
                    type="submit" 
                    variant="contained" 
                    fullWidth
                    size="large"
                  >
                    Send Message
                  </SubmitButton>
                </ContactForm>
              </ContactCard>
            </Grid>
          </Grid>
        </motion.div>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ContactSection>
  );
};

export default Contact; 