import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, MenuItem, Select } from '@mui/material';

const ItemsCard = () => {
  return (
    <Card sx={{ maxWidth: "360px" , width: "18rem", marginTop: "100px"}}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="/static/images/cards/contemplative-reptile.jpg"
         alt="green iguana"
       />
           <CardContent>
           <Typography gutterBottom variant="h5" component="div">
               Lizard
           </Typography>
           <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
           </Typography>
           </CardContent>
       </CardActionArea>
       <CardActions>
           <Button size="small" color="primary">
           Share
           </Button>
           <Select>
               {
                   Array.from(Array(6),(i) => {
                       return (
                       <MenuItem key={i+1} value={i+1} >{i+1}</MenuItem>
                       )
                   }
               )}
           </Select>
           <Select>
               <MenuItem value="half" >half</MenuItem>
               <MenuItem value="full" >full</MenuItem>
           </Select>
           <div style={{display: "inline"}}>Total Price</div>
     </CardActions>
  </Card>
  )
}

export default ItemsCard