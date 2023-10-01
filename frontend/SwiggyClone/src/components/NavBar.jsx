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
    <AppBar  style={{ position:"fixed",backgroundColor:"#FFA500"}}>
        <Toolbar>
             <Typography variant="h6"  sx={{flexGrow: 1}}><img
            src="https://pnggallery.com/wp-content/uploads/swiggy-logo-01.png"
            alt="Swiggy Logo"
            style={{ marginRight: "10px", height: "95px", width: "95px" }}
          />
          </Typography>

            {userName? 
                <> 
                    
                    <Typography variant="h6" component={"span"} sx={{marginRight:"1rem"}}>{userName}</Typography>
                    <Button color="inherit" sx={{marginRight:"1rem"}} onClick={() => {
                                navigate("/order")
                    }}
                    >Order</Button>
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


// function Header(){
    

//     // useEffect(()=>{
//     //     axios.get('http://localhost:3000/admin/me' , {
//     //         headers: {
//     //             Authorization: "Bearer " + localStorage.getItem("token")
//     //         }
//     //      }).then( res => {
//     //         setLoggedin(true);
//     //         setUsername(res.data.username);
//     //      })
//     // } ,[])

//     // const logoutHandler = ()=>{
//     //     setLoggedin(false);
//     //     localStorage.removeItem("token");
//     //     setUsername("");
//     // }

//     return <>
//     <AppBar position="fixed">
//         <Toolbar >
//             <Typography variant="h6"  sx={{flexGrow: 1}}>Courseflix</Typography>

//             {loggedin? 
//                 <> 
//                     <Typography variant="subtitle1" component={"span"} sx={{marginRight:"1rem"}}>{username}</Typography>
//                     <Button color="inherit" onClick={logoutHandler} >Logout</Button>
                
//                 </> : <>  
//                     <Button color="inherit" size="large" onClick={()=>{
//                         navigate('/login')
//                     }}>LogIn</Button>
//                     <Button color="inherit" size="large" onClick={()=>{
//                         navigate('/signup')
//                     }}>SignUp</Button>
//                 </>
//             }
            
            
//         </Toolbar>
//     </AppBar>
//     </>
// }
