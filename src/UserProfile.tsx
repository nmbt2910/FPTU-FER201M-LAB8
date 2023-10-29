import React, { useEffect, useState } from 'react';
import { Typography, Box, Avatar, Button, Paper } from '@mui/material';
import { useAuth } from './AuthContext';

function UserProfile() {
  const { user, logOut } = useAuth();
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const avatarSrc = user?.photoURL || ''; // Set a default value if user.photoURL is null or undefined
  const altText = user?.displayName || ''; // Set a default value if user.displayName is null or undefined

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar alt={altText} src={avatarSrc} sx={{ width: 100, height: 100, my: '1rem' }} />
      <Typography variant="h4" gutterBottom>
        {user?.displayName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: {user?.email}
      </Typography>
      <Button variant="outlined" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
}

export default UserProfile;