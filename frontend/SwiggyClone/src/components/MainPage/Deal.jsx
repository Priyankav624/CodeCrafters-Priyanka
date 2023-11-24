import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';


const Deal = () => {
  return (
    <div> 
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr" , margin:"80px",marginTop:"200px", marginBottom:"180px"}}>
            <Card>
                <CardActionArea>
                <CardMedia
                component="img"
                height="400"
                image="http://www.imagesthatsell.com.au/blog/wp-content/uploads/2018/06/S2-18164-OOS-111-GIF.gif"
                alt="Clothing"
            /></CardActionArea>
            </Card>
            <Card style={{padding:"50px"}}>
                <Typography>
                    DEAL OF THE WEEK
                </Typography>
                <Typography>
                    -----------
                </Typography>
                <Typography>
                    Sale is only in a week up to 30% off
                </Typography>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", columnGap:"10px", padding:"30px"}}>
                    <div style={{border:"1px grey dashed",height:"50px", width:"50px",padding:"5px"}}>
                    10
                    </div>
                    <div style={{border:"1px grey dashed", padding:"5px",height:"50px", width:"50px"}}>
                    10
                    </div>
                    <div style={{border:"1px grey dashed", padding:"5px", height:"50px", width:"50px"}}>
                    10
                    </div>
                    <div style={{border:"1px grey dashed", padding:"5px", height:"50px", width:"50px"}}>
                    10
                </div>
            </div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", columnGap:"8px"}}>
                    <div style={{marginLeft:"40px"}}>
                    DAYS
                    </div>
                    <div style={{marginLeft:"20px"}}>
                    HOURS
                    </div>
                    <div style={{marginLeft:"15px"}}>
                    MINS
                    </div>
                    <div >
                    SECS
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Deal