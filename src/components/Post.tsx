import React from 'react';

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

type Props = {
  randomImgId: number;
};

export const Post: React.FC<Props> = ({ randomImgId }) => {
  return (
    <Card elevation={2}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Proident culpa et veniam"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        // eslint-disable-next-line max-len
        image={`https://picsum.photos/1280/720?random=${randomImgId}`}
        alt="Post Photo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Aliquip proident culpa et veniam est elit occaecat excepteur fugiat
          minim ad laboris magna ex. Et duis ipsum duis voluptate. Nostrud id do
          consequat reprehenderit incididunt anim pariatur do cillum amet elit
          ad ad.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
        <Checkbox icon={<Share />} checkedIcon={<Share color="primary" />} />
      </CardActions>
    </Card>
  );
};
