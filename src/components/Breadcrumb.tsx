import React from 'react';
import { Breadcrumbs, Link as MuiLink, LinkProps as MuiLinkProps, Typography, Box } from '@mui/material';
import { Link as RouterLink, useLocation, LinkProps as RouterLinkProps } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

const BreadcrumbWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  backgroundColor: theme.palette.background.default,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
}));

interface StyledLinkProps extends MuiLinkProps {
  component?: React.ElementType;
  to?: string;
}

const StyledLink = styled(MuiLink)<StyledLinkProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
}));

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map of route to display names
  const routeNames: { [key: string]: string } = {
    services: 'Services',
    training: 'Training',
    team: 'Team',
    'cloud-infrastructure': 'Cloud Infrastructure',
    'security-solutions': 'Security Solutions',
    'ai-machine-learning': 'AI & Machine Learning',
    'software-development': 'Software Development',
    'system-architecture': 'System Architecture',
    'devops-automation': 'DevOps & Automation',
    'fractional-cto': 'Fractional CTO',
    postgres: 'PostgreSQL Training',
    security: 'Security Training',
  };

  return (
    <BreadcrumbWrapper>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 3 }}>
        <StyledBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <StyledLink component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
            <HomeIcon fontSize="small" />
            Home
          </StyledLink>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <Typography
                key={name}
                color="text.primary"
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 500
                }}
              >
                {routeNames[name] || name}
              </Typography>
            ) : (
              <StyledLink
                key={name}
                component={RouterLink}
                to={routeTo}
                sx={{ textDecoration: 'none' }}
              >
                {routeNames[name] || name}
              </StyledLink>
            );
          })}
        </StyledBreadcrumbs>
      </Box>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb; 