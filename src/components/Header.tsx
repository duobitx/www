import React from 'react';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.08)',
}));

const NavLink = styled(RouterLink)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

const Logo = styled('img')({
  height: '40px',
  width: 'auto',
  objectFit: 'contain',
  marginRight: '16px',
});

const LogoLink = styled(RouterLink)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledAppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <LogoLink to="/">
            <Logo src="/duobit_logo.jpeg" alt="DuoBit" />
          </LogoLink>
          <Box sx={{ flexGrow: 1 }} />
          <NavLink
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={location.pathname === '/services' ? 'active' : ''}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header; 