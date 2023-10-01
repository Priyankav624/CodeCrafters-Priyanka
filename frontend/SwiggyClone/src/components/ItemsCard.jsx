import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, MenuItem, Select } from '@mui/material';

const ItemsCard = (props) => {
    let options = props.options;
    let priceOptions = Object.keys(options);

  return (
    <Card sx={{ maxWidth: "360px" , width: "18rem", marginTop: "100px"}}>
    <CardActionArea>
            <img src={props.img} height="170" />
           <CardContent>
           <Typography gutterBottom variant="h5" component="div">
               {props.foodName}
           </Typography>
           <Typography variant="body2" color="text.secondary">
               {props.desc}
           </Typography>
           </CardContent>
       </CardActionArea>
       <CardActions>
           {/* <Button size="small" color="primary">
           Share
           </Button> */}
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
                   { priceOptions.map((data) => {
                        return <MenuItem key={data} value={data} >{data}</MenuItem>
                   })}
           </Select>
           <div style={{display: "inline"}}>Total Price</div>
     </CardActions>
  </Card>
  )
}

export default ItemsCard