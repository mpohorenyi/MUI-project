import React, { useState } from 'react';

import {
  Box,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { AddPost } from './components/AddPost';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { RightBar } from './components/RightBar';
import { Sidebar } from './components/Sidebar';

const App: React.FC = (): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const handleTheme = (): void => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />

        <Stack direction="row" justifyContent="space-between">
          <Sidebar changeTheme={handleTheme} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
};

export default App;
