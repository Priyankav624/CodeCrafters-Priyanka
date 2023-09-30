import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{display: "flex", border:"1px solid black", padding:"10px", backgroundColor: "Black", color:"white", justifyContent: "flex-start"}}>
        <Container>
           <Typography variant="h6" >COMPNAY</Typography>
           <Typography variant="body2" >About Us</Typography>
           <Typography variant="body2" >Contact</Typography>
           <Typography variant="body2" >Help</Typography>
        </Container>
        <Container>
           <Typography variant="h6" >CONTACT</Typography>
           <Typography variant="body2" >Help & Support</Typography>
           <Typography variant="body2" >Partner with us</Typography>
           <Typography variant="body2" >Ride with us</Typography>
        </Container>
    </div>
  )
}

export default Footer