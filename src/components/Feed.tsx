import React from 'react';

import { Box, Stack } from '@mui/material';
import { Post } from './Post';

export const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Stack spacing={3}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  );
};
