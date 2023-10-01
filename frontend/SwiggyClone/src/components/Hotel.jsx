import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, MenuItem, Select } from '@mui/material';
import axios from 'axios';

function Hotel() {
    return ( 
        <div className='grid-container'style={{marginLeft:"70px", marginTop: "150px" , marginBottom: "90px" }}>
           <h1 style={{fontWeight:"bold"}}>Restaurants With Great Offers Near Me</h1>
           <h2 style={{marginBottom: "100px" }} >Veg & Non Veg Restaurents</h2>
            <div className="card-grid">
        <div>
        <Card sx={{ maxWidth: 270 }}>
        <CardActionArea>
            <a href='http://localhost:5173/order'>
          <CardMedia
            component="img"
            height="190"
            image="https://imgs.search.brave.com/25LoUoVDyODoLeh6a5HxoaqoTL_yw088pvYZHb2r9XQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vcmll/bnRhbC1mb29kLTI1/MTg5NjUyLmpwZw"
            alt="Velore Kitchen"
          /></a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Velore Kitchen
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Biriyani , Fried Rice, Starters, Pizza etc...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card></div>
      <div>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <a href='http://localhost:5173/order'>
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/aA5nEBZ7kZaJRPdBFdFYZ9WQUvPnKFfH-h--Qd-8mxE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjEw/NzQyNzI2L3Bob3Rv/L3N0cmVldC1mb29k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12SGFLQ01oWXF5/WVJ4dDhfOFVsMm9I/YkszZnQwOWkwVzQ2/QjRaaXoyaEhnPQ"
                alt="Street Food"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Street Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Biriyani , Fried Rice, Starters, Pizza etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </div>
        <div>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <a href='http://localhost:5173/order'>
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/H0ARVtY8TXICPcDFzHFJ4mF26RGG12WevuOSHSheJ08/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzAy/NTQzMDEzL3Bob3Rv/L2luZGlhbi1jdWlz/aW5lLXRoYWxpLWJv/d2xzLW9uLXJlc3Rh/dXJhbnQtdGFibGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWJYWVl3VXBidjZw/QXRIbmp6Sm9Ga1dN/N3NlZk1XOUNZSm94/MTNrMzRiOFk9"
                alt="Indian Food"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Indian Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Biriyani , Fried Rice, Starters, Pizza etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card></div>
        <div>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <a href='http://localhost:5173/order'>
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/5S4EF0nsNzWhcYl_JlymMQbuKCZ1WOQf60rHA7VqjIE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NzQxMTMyOC9waG90/by9pbmRpYW4tZGlu/bmVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz16NTFxX0dz/REZSMnYwWVVxMnNL/TDMzeWRtV0YyX1dl/UkZHQ3NaSW1VRk8w/PQ"
                alt="Naan Hotel"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Naan Hotel
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Biriyani , Fried Rice, Starters, Pizza etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card></div>
        <div style={{marginTop:"30px"}}>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <a href='http://localhost:5173/order'>
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/xm-OQ1wF96zxXDBiXx450Gvf9gD41P-ZvRYibJGJ-cc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/ODAyOTIyMC9waG90/by90YW5kb29yaS1j/aGlja2VuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jNnVl/Mmc3ZW8zZlBLakNF/b1NFeFhvczg1V1dX/bGFQYU9YbldGbWIw/OWNRPQ"
                alt="Tandoori Chicken"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Tandoori Chicken
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Biriyani , Fried Rice, Starters, Pizza etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card></div>
        <div style={{marginTop:"30px"}}>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
                <a href='http://localhost:5173/order'>
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/P2iwCfiBAJTpApYBHRRlazxM5JyG3rsrUVypsJg0oPA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU3Lzg0Lzkw/LzM2MF9GXzU3ODQ5/MDgyX1RaYTdxOGxJ/UktYQ2dKcXNpdTRw/MDlwbU44RmtQMklp/LmpwZw"
                alt="Pizza Hut"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Pizza Hut
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Biriyani , Fried Rice, Starters, Pizza etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card></div>
        </div>
      </div>
    );
    
  }

  export default Hotel;