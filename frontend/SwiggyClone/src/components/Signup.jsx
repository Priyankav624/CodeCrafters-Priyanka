import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, FormControl, TextField, Typography , Button } from "@mui/material";
import axios from "axios";


const Signup = () => {
  const [username , setUsername ] = useState("");
  const [password , setPassword ] = useState("");
  const [location , setLocation ] = useState("");
  const [email , setEmail ] = useState("");
  const navigate = useNavigate();

  const usernameHandler = (e) => setUsername(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const locationHandler = (e) => setLocation(e.target.value);


  const login = () => {
      axios.post('http://localhost:3000/api/createuser',{username,password,location,email})
      .then(res => {
          console.log(res.data.msg)
          
          // localStorage.setItem("token" , res.data.token)
          navigate('/hotel');
      })
      .catch(err => console.error(err))
  }


return <Box  display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} height={"100vh"}>
<Typography variant="h5" component={"h5"} gutterBottom>Sign Up</Typography>
<FormControl>
    <TextField 
        fullWidth 
        variant="outlined" 
        value={username} 
        label="Username" 
        margin="normal" 
        sx={{marginBottom: "1rem" , marginTop:"0rem"}} 
        onChange={usernameHandler}
    />
    <TextField 
        fullWidth 
        variant="outlined" 
        label="Password" 
        type='password'
        margin="normal" 
        sx={{marginBottom:"1rem", marginTop:"0rem"}} 
        value={password}
        onChange={passwordHandler}
    />
    <TextField 
        fullWidth 
        variant="outlined" 
        value={email} 
        label="Email" 
        type='Email'
        margin="normal" 
        sx={{marginBottom: "1rem" , marginTop:"0rem"}} 
        onChange={emailHandler}
    />
    <TextField 
        fullWidth 
        variant="outlined" 
        value={location} 
        label="location" 
        margin="normal" 
        sx={{marginBottom: "1rem" , marginTop:"0rem"}} 
        onChange={locationHandler}
    />
    <Button 
        variant="contained" 
        size="large" 
        onClick={login}
    >Signup</Button>
</FormControl>
</Box>
}


export default Signup