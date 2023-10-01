import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, FormControl, TextField, Typography , Button } from "@mui/material";
import axios from "axios";
import {useSetRecoilState} from "recoil";
import {userState} from "../store/atoms/user.js";


const Login = () => {
  const [username , setUsername ] = useState("");
  const [password , setPassword ] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);


  const usernameHandler = (e) => setUsername(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const login = () => {
      axios.post('http://localhost:3000/api/login',{username , password})
      .then(res => {
          console.log(res.data.msg)
          localStorage.setItem("token" , res.data.token)
          setUser({
            userName: username,
            isLoading: false
        })
          navigate('/');
      })
      .catch(err => console.error(err))
  }

  return <Box  display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} height={"100vh"}>
      <Typography variant="h5" component={"h5"} gutterBottom>Log In</Typography>
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
              margin="normal" 
              sx={{marginBottom:"1rem", marginTop:"0rem"}} 
              value={password}
              onChange={passwordHandler}
          />
          <Button 
              variant="contained" 
              size="large" 
              onClick={login}
          >Login</Button>
      </FormControl>
  </Box>
}
export default Login