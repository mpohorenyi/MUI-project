import React from 'react';

import {
  AccountBox,
  Article,
  DarkMode,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

const listCategory = [
  { title: 'Home', icon: <Home /> },
  { title: 'Pages', icon: <Article /> },
  { title: 'Groups', icon: <Group /> },
  { title: 'Marketplace', icon: <Storefront /> },
  { title: 'Friends', icon: <Person /> },
  { title: 'Settings', icon: <Settings /> },
  { title: 'Profile', icon: <AccountBox /> },
];

export const Sidebar: React.FC = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <List>
        {listCategory.map((item) => (
          <ListItemButton key={item.title}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}

        <ListItem>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <Switch />
        </ListItem>
      </List>
    </Box>
  );
};
