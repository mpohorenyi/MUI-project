import React from 'react';

import { Box, Stack } from '@mui/material';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { RightBar } from './components/RightBar';
import { Sidebar } from './components/Sidebar';

const App: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
