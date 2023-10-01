import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, MenuItem, Select } from '@mui/material';

const ItemsCard = (props) => {

  return (
    <Card sx={{ maxWidth: "360px" , width: "18rem", marginTop: "100px"}}>
    <CardActionArea>
       <CardMedia
         component="img"
         height="170"
         image="https://imgs.search.brave.com/eh1kFQat9s7ZMT25nVhZLpJub-_zvIrb8Qu95hGsKy4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NjUxNjkxOS9waG90/by9kb3NhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1PeHFI/ckVRc1dTN2ZXSkdj/UTdaaldHVDhKVkp4/bG9HVTU2ZTlVZkE5/anhZPQ"
         alt="Dosa"
       />
           <CardContent>
           <Typography gutterBottom variant="h5" component="div">
               Dosa
           </Typography>
           <Typography variant="body2" color="text.secondary">
               Plain, Masala, Egg
           </Typography>
           </CardContent>
       </CardActionArea>
       <CardActions>
           <Button size="small" color="primary">
           Share
           </Button>
           <Select value={1}>
               {
                   Array.from(Array(6),(e,i) => {
                       return (
                       <MenuItem key={i+1} value={i+1} >{i+1}</MenuItem>
                       )
                   }
               )}
           </Select>
           <Select value={"half"}>
            
               <MenuItem value="half" >half</MenuItem>
               <MenuItem value="full" >full</MenuItem>
           </Select>
           <div style={{display: "inline"}}>Total Price</div>
     </CardActions>
  </Card>
  )
}

export default ItemsCard