import React from 'react';
import { Box } from '@mui/material';

function BottomBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#0b6285',
        color: '#ffffff',
        textAlign: 'center',
        padding: '12px',
      }}
    >
      SoccerSphere by TypeScript @ 2023
    </Box>
  );
}

export default BottomBar;