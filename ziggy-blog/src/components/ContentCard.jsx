import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ContentCard() {
  const expand = () => {
    console.log("expanded")
  }
  return (
    <Card>
      <CardActionArea onClick={expand}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Post Title
          </Typography>
          <Typography noWrap variant="body2" color="text.secondary">
            This is the text body of the post. It will likely need a different container as 
            it will contain multiple element types.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
