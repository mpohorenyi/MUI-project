import React, { useState } from 'react';

import { Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { MUIIcon } from './MUIIcon';
import { SearchBar } from './SearchBar';

export const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' } }}>
          MUI Project
        </Typography>

        <MUIIcon />

        <SearchBar />

        <Box display="flex" gap={1} alignItems="center">
          <Box display={{ xs: 'none', sm: 'block' }}>
            <IconButton size="large" color="inherit" sx={{ p: 1 }}>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ p: 1 }}>
              <Badge badgeContent={7} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Box>
          <IconButton
            size="large"
            color="inherit"
            sx={{ p: 1 }}
            onClick={handleClick}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
