import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

function About() {
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
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '32px', textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ marginBottom: '16px' }}>
            About SoccerSphere
          </Typography>
          <Typography variant="body1">
            SoccerSphere is an immersive online destination for all soccer enthusiasts. Our website offers a comprehensive platform that caters to the diverse needs of soccer fans, players, and coaches alike. Whether you're looking for the latest news and updates on your favorite teams and players, in-depth analysis and match reports, or expert tips and training resources to enhance your skills, SoccerSphere has got you covered. With a user-friendly interface and a wealth of engaging content, we strive to create a vibrant community where soccer lovers can come together, share their passion, and stay connected to the beautiful game. Join us at SoccerSphere and experience the excitement of soccer like never before.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;