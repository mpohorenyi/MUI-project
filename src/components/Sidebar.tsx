import React from 'react';

import { Box } from '@mui/material';

export const Sidebar: React.FC = () => {
  return (
    <Box
      bgcolor="red"
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Sidebar
    </Box>
  );
};
