import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Button, Box, Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function CustomAppBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleSoccerClick = () => {
    navigate('/');
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const drawerItems = [
    { text: 'Dashboard', link: '/' },
    { text: 'Details', link: '/details' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];

  const renderNavigation = () => {
    if (isMobileScreen) {
      return (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} variant="persistent">
          <List sx={{ width: 240 }}>
            {drawerItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.link} onClick={toggleDrawer}>
                <ListItemText primary={item.text} primaryTypographyProps={{ style: { color: '#000', fontWeight: 'bold' } }} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      );
    } else {
      return (
        <React.Fragment>
          {drawerItems.map((item, index) => (
            <Button key={index} component={Link} to={item.link} sx={{ fontWeight: 'bold', color: '#fff' }}>
              {item.text}
            </Button>
          ))}
        </React.Fragment>
      );
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0b6285' }}>
      <Toolbar>
        {isMobileScreen ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <SportsSoccerIcon sx={{ marginRight: '8px', cursor: 'pointer' }} onClick={handleSoccerClick} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleSoccerClick}>
          SoccerSphere by TypeScript
        </Typography>
        {renderNavigation()}
        {user?.displayName ? (
          <div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user?.email || 'User'} src={user?.photoURL || ''} />
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" style={{ color: "black" }}>
                  <Link to="/" style={{ textDecoration: "none", color: "black" }}>Dashboard</Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" style={{ color: "black" }}>
                  <Link to="/userprofile" style={{ textDecoration: "none", color: "black" }}>User Profile</Link>
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center" style={{ color: "black" }} onClick={handleSignOut}>Logout</Typography>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}>
              Sign in
            </Button>
          </Link>
        )}
      </Toolbar>
      {isDrawerOpen && isMobileScreen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={toggleDrawer}
        />
      )}
    </AppBar>
  );
}

export default CustomAppBar;