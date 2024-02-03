import React from 'react';

import { Box, Stack } from '@mui/material';
import { Post } from './Post';

export const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Stack spacing={3}>
        <Post randomImgId={1} />
        <Post randomImgId={2} />
        <Post randomImgId={3} />
        <Post randomImgId={4} />
        <Post randomImgId={5} />
      </Stack>
    </Box>
  );
};
