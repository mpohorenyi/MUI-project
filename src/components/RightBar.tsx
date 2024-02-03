import React from 'react';

import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

export const RightBar: React.FC = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6" color="textSecondary" mb={1}>
            Online Friends
          </Typography>
          <AvatarGroup
            max={7}
            sx={{ display: 'flex', justifyContent: 'start' }}
          >
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/230" />
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/310" />
            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/323" />
            <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/130" />
            <Avatar alt="Trevor Baker" src="https://i.pravatar.cc/579" />
            <Avatar alt="Travis Henderson" src="https://i.pravatar.cc/612" />
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/175" />
            <Avatar alt="Cindy Walker" src="https://i.pravatar.cc/111" />
          </AvatarGroup>
        </Box>

        <Box>
          <Typography variant="h6" color="textSecondary" mb={1}>
            Latest Photos
          </Typography>
          <ImageList cols={3}>
            <ImageListItem>
              <img src="https://picsum.photos/200?random=1" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://picsum.photos/200?random=2" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://picsum.photos/200?random=3" />
            </ImageListItem>
          </ImageList>
        </Box>

        <Box>
          <Typography variant="h6" color="textSecondary" mb={1}>
            Latest Conversations
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/230" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://i.pravatar.cc/274" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/831" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
};
