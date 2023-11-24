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
           <h1 style={{fontWeight:"bold"}}>Shop With Great Offers Near Me</h1>
           <h2 style={{marginBottom: "100px" }} ></h2>
            <div className="card-grid">
        <div>
        <Card sx={{ maxWidth: 270 }}>
        <CardActionArea>
           
          <CardMedia
            component="img"
            height="190"
            image="https://imgs.search.brave.com/HvdDyCE8G9mIujye0X2S7qGnN7sjSoU7pA_DM0a5ZmM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFTNmZycGpZcUwu/anBn"
            alt="dress"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mobiles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Redmi,Moto, Iphone,Galaxy etc...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card></div>
      <div>
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
            
            <CardMedia
                component="img"
                height="190"
                image="https://imgs.search.brave.com/3-AKqEuhiQVD4mA9KiksBiZqsGEIt1ZcVKhQ4JHqgTk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA2L2xhcHRv/cHN1bmRlcjUwMC0y/MDQ4cHgtYWNlcmFz/cGlyZTNzcGluMTQu/anBn"
                alt="Laptop"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Laptops
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Mac, HP, DELL etc...
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
                image="https://imgs.search.brave.com/t5TxtENaD4JBTY3y-akiRW9X7HX2sKNkhl1p8oPf6sc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1Jm/V2pOVTZQNDNBQW1I/V25GN3A1aWctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUVTBN/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2dvYmFu/a2luZ3JhdGVzXzY0/NC8zZTMxODEyYjEx/ODE5NWUxMDI0MmRi/YzU5YzhmNjViMg"
                alt="Electroins"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Electronics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Lights etc...
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
                image="https://imgs.search.brave.com/QM6jBnVR3jjrFZ5BNqOSlnRkim5G_zKHa3tbtZGGpCc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzkxLzc0Lzg3/LzM2MF9GXzI5MTc0/ODcwMF9vd1RCNG9K/UGtUVFllNUlhZ0hN/dE1zcHR6cEI2OGpT/bS5qcGc"
                alt="Naan Hotel"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Beauty Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lipstick, Eye Liner, Kajal etc...
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
                image="https://imgs.search.brave.com/DxUUAdC4GIqx3hSd-5M9B0sA6CXH5qj9VSa82OrEcJQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NDg2NzM3Ni9waG90/by9jaGFpcnMtaW4t/ZnVybml0dXJlLXN0/b3JlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DR1U5MXhn/ZDFJNVVhUlU4eEU1/TTVVcUVkTUZHblBE/OVppSU0tZldKdm13/PQ"
                alt="Tandoori Chicken"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Furniture
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Chairs, Sofas, Tables etc...
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
                image="https://imgs.search.brave.com/Cpn-8EH0yclQfqf2Er4jFZe63SdOfFiNZz2OXw98BNo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFpZUZvZWctckwu/anBn"
                alt="Pizza Hut"
            /></a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Grocery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Pens, Milk etc...
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card></div>
        </div>
      </div>
    );
    
  }

  export default Hotel;