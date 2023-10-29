import React, { useEffect, useState } from 'react';
import { Typography, Box, Avatar, Button, Paper } from '@mui/material';
import { useAuth } from './AuthContext';

function UserProfile() {
  const { user, googleSignIn, logOut } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const avatarSrc = user?.photoURL || ''; // Set a default value if user.photoURL is null or undefined
  const altText = user?.displayName || ''; // Set a default value if user.displayName is null or undefined
  const isUserLoggedIn = Boolean(user);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '-113px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '32px', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar alt={altText} src={avatarSrc} sx={{ width: 100, height: 100 }} />
          </Box>
          <Typography variant="h4" gutterBottom>
            {user?.displayName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user?.email}
          </Typography>
          {isUserLoggedIn ? (
            <Button variant="outlined" onClick={handleSignOut} color="error">
              Sign Out
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleSignIn} color="primary">
              Sign In with Google
            </Button>
          )}
        </Paper>
      </Box>
    </Box>
  );
}

export default UserProfile;