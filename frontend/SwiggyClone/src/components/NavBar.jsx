import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { userState } from "../store/atoms/user.js";
import { userNameState } from "../store/selectors/userEmail"


const NavBar = () => {
    const navigate = useNavigate();
    const userName = useRecoilValue(userNameState);
    const setUser = useSetRecoilState(userState);

  return (
    <>
    <AppBar  style={{ position:"fixed",backgroundColor:"#000000"}}>
        <Toolbar>
             <Typography variant="h6"  sx={{flexGrow: 1}}>
                <a href = " http://localhost:5173/">
                <img 
                src="https://imgs.search.brave.com/4456AxXu6O3bsEvXCKxEjJ6Bl4gwoVe8HtCiBQyBFFE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk5LzcyLzA5/LzM2MF9GXzQ5OTcy/MDk5NV9zZm1Vb1dv/bTUwa3gyNUNZY09p/WUxWeEJPc3RkYjVq/ai5qcGc"
                alt="Clothing"
                style={{ margin: "15px", height: "70px", width: "95px" }}
          /> </a>
          
          </Typography>

            {userName? 
                <> 
                    <Typography variant="h6" component={"span"} sx={{marginRight:"1rem"}}>{userName}</Typography>
                    <Button color="inherit" sx={{marginRight:"1rem"}} onClick={() => {
                                navigate("/hotel")
                    }}>Hotels</Button>
                    <Button color="inherit" sx={{marginRight:"1rem"}} onClick={() => {
                                navigate("/order")
                    }}
                    >Order</Button>
                    <Button color="inherit" sx={{marginRight:"1rem"}} onClick={() => {
                                navigate("/myCart")
                    }}
                    >MyCart</Button>
                    <Button color="inherit" onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userName: null
                            })
                        }}>Logout</Button>
                
                </> : <>  
    
                    <Button color="inherit" size="large" onClick={()=>{
                        navigate('/login')
                    }}>LogIn</Button>
                    <Button color="inherit" size="large" onClick={()=>{
                        navigate('/signup')
                    }}>SignUp</Button>
                </>
            }
        </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar

