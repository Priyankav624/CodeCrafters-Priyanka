import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, MenuItem, Select } from '@mui/material';
import axios from 'axios';

const ItemsCard = (props) => {
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty , setQty ] = useState(1);
    const [size , setSize ] = useState(priceOptions[0])
    const sizeHandler = (e) => setSize(e.target.value);
    let finalprice = qty * props.price;



  return (
    <Card sx={{ maxWidth: "360px" , width: "18rem", marginTop: "100px"}}>
    <CardActionArea>
            <img src={props.img} height="170" />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.foodName}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                {props.desc}
            </Typography>
            <Select value={qty} onChange={(e)=>{
                setQty(e.target.value)
            }}>
                {
                    Array.from(Array(6),(e,i) => {
                        return (
                        <MenuItem key={i+1} value={i+1} >{i+1}</MenuItem>
                        )
                    }
                )}
            </Select>
            <Select value={size} onChange={sizeHandler}>
                    { priceOptions.map((data) => {
                            return <MenuItem key={data} value={data} >{data}</MenuItem>
                    })}
            </Select >
            <Typography  style={{paddingTop:15}} variant="h5" component="div">
                Total Price: ₹{finalprice}
            </Typography>
           </CardContent>
           
       </CardActionArea>
       <CardActions>
           <Button size="small" color="primary">
                Add to Cart
           </Button>
     </CardActions>
  </Card>
  )
}

export default ItemsCard