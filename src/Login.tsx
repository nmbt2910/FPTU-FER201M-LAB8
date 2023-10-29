import React, { useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useAuth } from './AuthContext';

export default function Login() {
  const { googleSignIn, user } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/userprofile');
    }
  }, [user, navigate]); // Include navigate in the dependency array

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      marginTop="-113px"
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '32px', textAlign: 'center' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" component="h1" sx={{ marginBottom: '16px' }}>
              Login with Google
            </Typography>
            <Box width="100%" display="flex" justifyContent="center">
              <GoogleButton onClick={handleGoogleSignIn} />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}