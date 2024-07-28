import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Link, useLocation } from 'react-router-dom';

const pages = ['Home', 'About', 'Travel', 'Eat', 'Relax'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Determine selected page based on the current pathname
  const selectedPage = location.pathname.split('/')[1];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleSelectPage = (page) => {
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar sx={{ width: '100%', backgroundColor: '#17153B', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ConnectingAirportsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 30,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              TRAVEL
            </Typography>

            {/* Navigation menu for small screens */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleSelectPage(page)}>
                    <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                      <Typography textAlign="center" variant="inherit">
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo */}
            <ConnectingAirportsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 5,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              LOGO
            </Typography>

            {/* Navigation links for large screens */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  onClick={() => handleSelectPage(page)}
                  sx={{
                    py: 2.5,
                    px: 2,
                    borderRadius: 0,
                    color: selectedPage === page.toLowerCase() ? 'white' : 'white',
                    fontSize: selectedPage === page.toLowerCase() ? '15px' : 'normal',
                    fontWeight: selectedPage === page.toLowerCase() ? 'bold' : 'normal',
                    textDecoration: selectedPage === page.toLowerCase() ? 'underline' : 'none',
                    display: 'block',
                    textTransform: 'none',
                    backgroundColor: selectedPage === page.toLowerCase() ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      backgroundColor: selectedPage === page.toLowerCase() ? '#2E236C' : 'rgba(255, 255, 255, 0.1)',
                      color:'white'
                    },
                    '&:focus': {
                      outline: 'none',
                    },
                    '&:focus-visible': {
                      outline: 'none',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Search input */}
            <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search…"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
              </form>
            </Box>

            {/* User settings */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
}

export default ResponsiveAppBar;
