import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import zIndex from '@mui/material/styles/zIndex';
import {useSetRecoilState, useRecoilValue} from "recoil";
import { userState } from "../store/atoms/user.js";
import { userNameState } from "../store/selectors/userEmail"


const NavBar = () => {
    const navigate = useNavigate();
    const userName = useRecoilValue(userNameState);
    const setUser = useSetRecoilState(userState);

  return (
    <>
    <AppBar  style={{ position:"fixed",backgroundColor:"#fc8019"}}>
        <Toolbar>
             <Typography variant="h6" sx={{flexGrow: 1}} onClick={() => {
                                navigate("/")
                    }}>

                <img 
                src="http://www.pngimagesfree.com/LOGO/S/Swiggy/Swiggy-Logo-Vector.png"
                alt="Swiggy Logo"
                style={{ margin: "15px", height: "70px", width: "95px" }}
          /> 
          
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
                    >My Cart</Button>
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

