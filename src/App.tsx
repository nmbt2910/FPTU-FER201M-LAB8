import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomAppBar from './AppBar';
import PlayerList from './PlayerList';
import Contact from './Contact';
import About from './About';
import Details from './Details';
import Login from './Login';
import UserProfile from './UserProfile';
import BottomBar from './BottomBar';

interface PlayerData {
  id: number;
  name: string;
  cost: string;
  club: string;
  img: string;
  clip: string;
  famous: boolean;
  nation: string;
  info: string;
}

function App(): JSX.Element {
  const [APIData, setAPIData] = useState<PlayerData[]>([]);

  useEffect(() => {
    const fetchAPIData = async (): Promise<void> => {
      try {
        const response = await fetch('https://6535dff3c620ba9358ecb96d.mockapi.io/dbPlayers');
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        const data = await response.json();
        setAPIData(data);
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    fetchAPIData();
  }, []);

  return (
    <Router>
      <div>
        <CustomAppBar />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details players={APIData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </Container>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;