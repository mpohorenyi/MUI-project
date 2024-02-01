import React from 'react';

import { Box } from '@mui/material';

export const RightBar: React.FC = () => {
  return (
    <Box
      bgcolor="green"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      RightBar
    </Box>
  );
};
