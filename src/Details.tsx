import React, { useState } from 'react';
import AddPlayerForm from './AddPlayerForm';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardMedia
} from '@mui/material';

interface PlayerData {
  id: number;
  img: string;
  name: string;
  club: string;
  nation: string;
  cost: string;
  clip: string;
  info: string;
}

interface DetailsProps {
  players: PlayerData[];
}

const Details: React.FC<DetailsProps> = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerData | null>(null);

  const handlePlayerClick = (player: PlayerData) => {
    setSelectedPlayer(player);
  };

  const handleClose = () => {
    setSelectedPlayer(null);
  };

  return (
    <Box sx={{ marginTop: '20px' }}>
      {players.map((data) => (
        <Card key={data.id} sx={{ marginBottom: '16px' }}>
          <CardMedia component="img" height="140" image={data.img} alt={data.name} />
          <CardContent>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              {data.name}
            </Typography>
            <Typography variant="body1">Club: {data.club}</Typography>
            <Typography variant="body1">Nation: {data.nation}</Typography>
            <Typography variant="body1">Cost: {data.cost}</Typography>
            <Box sx={{ marginTop: '10px' }}>
              <Button onClick={() => handlePlayerClick(data)} variant="contained" color="primary">
                Show Info
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
      <AddPlayerForm />

      <Dialog open={selectedPlayer !== null} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedPlayer?.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              width="100%"
              height="100%"
              src={selectedPlayer?.clip}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </Box>
          <DialogContentText sx={{ color: 'black', textAlign: 'center', marginTop: '16px' }}>
            <Typography variant="body1">{selectedPlayer?.info}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Details;