import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{ margin:"-15px", display: "flex", border:"1px solid black", padding:"40px", backgroundColor: "Black", color:"white", justifyContent: "flex-start"}}>
        <Container >
          <Typography variant='h6'>Swiggy</Typography>
          <Typography  variant='body2' >©2023 Bundl Technologies Pvt. Ltd</Typography>
        </Container>
        
        <Container>
           <Typography variant="h6" >Company</Typography><br />
           <Typography variant="body2" >About</Typography>
           <Typography variant="body2" >Careers</Typography>
           <Typography variant="body2" >Team</Typography>
           <Typography variant="body2" >Swiggy Blog</Typography>
           <Typography variant="body2" >Swiggy Genie</Typography>
           <Typography variant="body2" >Swiggy One</Typography>
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
  )
}

export default Footer