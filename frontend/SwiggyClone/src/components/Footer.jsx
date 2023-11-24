import React from 'react'
import Typography from '@mui/material/Typography';
import {Container } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <div style={{ margin:"-15px", display: "grid", border:"1px solid black", padding:" 20px 300px", boxShadow:"0 0 8px 0.01px", backgroundColor: "Black", color:"white", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
          <Container >
            <Typography variant='h6'>Get to Know us</Typography>
            <Typography  variant='body2' ></Typography>
          </Container>
          
          <Container>
            <Typography variant="h6" >Company</Typography><br />
            <Typography variant="body2" >About</Typography>
            <Typography variant="body2" >Careers</Typography>
            <Typography variant="body2" >Team</Typography>
            <Typography variant="body2" >Devices</Typography>
            <Typography variant="body2" >Science</Typography>
            <Typography variant="body2" >Relations</Typography>
          </Container>
          
          <Container>
            <Typography variant="h6" >Contact us</Typography><br />
            <Typography variant="body2" >Help & Support</Typography>
            <Typography variant="body2" >Partner with us</Typography>
            <Typography variant="body2" >Ride with us</Typography>
            </Container>
          
          <Container>
            <Typography variant="h6" >We deliver to:</Typography> <br />
            <Typography variant="body2" >Mumbai</Typography>
            <Typography variant="body2" >Bangalore</Typography>
            <Typography variant="body2" >Hyderabad</Typography>
            <Typography variant='body2' > Gurgaon</Typography>
            <Typography variant='body2' >Mumbai </Typography>
          </Container>
        </div>
        <div style={{marginRight:"-20px", backgroundColor:"white"}} >
            <hr ></hr>
        </div>
        <div style={{display:"flex", justifyContent:"center", fontSize:"25px", backgroundColor:"black", marginRight:"-20px",marginTop:"-2px"}}> 
            <img style={{height: "70px", width:"80px", margin:"10px", marginLeft:"30px"}} src="https://imgs.search.brave.com/4456AxXu6O3bsEvXCKxEjJ6Bl4gwoVe8HtCiBQyBFFE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk5LzcyLzA5/LzM2MF9GXzQ5OTcy/MDk5NV9zZm1Vb1dv/bTUwa3gyNUNZY09p/WUxWeEJPc3RkYjVq/ai5qcGc" alt="clothing"></img>  
            <h3 style={{color:"white"}}>Cloths</h3>
        </div>
             
    </div> 
    
  )
}

export default Footer