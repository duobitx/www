import React from 'react';
import { AppBar, Toolbar, Box, Container, Button, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation, LinkProps } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
}));

const NavButton = styled(Button)<{ component?: React.ElementType } & LinkProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: 'rgba(37, 99, 235, 0.08)',
  },
}));

const Logo = styled('img')({
  height: '40px',
  width: 'auto',
  objectFit: 'contain',
  marginRight: '16px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const LogoLink = styled(RouterLink)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const Header: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/training', label: 'Training' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} component={RouterLink} to={item.path}>
            <ListItemText 
              primary={item.label}
              sx={{
                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <LogoLink to="/">
              <Logo src="/duobit_logo.jpeg" alt="DuoBit" />
            </LogoLink>
            <Box sx={{ flexGrow: 1 }} />
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 