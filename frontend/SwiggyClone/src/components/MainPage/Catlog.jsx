import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';

const Catlog = () => {
  return (
    <div>        
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", margin:"-250px 40px", columnGap:"30px" , padding:"15px"}}>
            
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 400}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="290"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
                            alt="Clothing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <a  style={{textDecoration:"none", color:"skyblue"}} href="Cat2.js"> Shop now</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="290"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
                            alt="Clothing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <a  style={{textDecoration:"none", color:"skyblue"}} href="Cat2.js"> Shop now</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="290"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                            alt="Clothing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <a  style={{textDecoration:"none", color:"skyblue"}} href="Cat2.js"> Shop now</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="290"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                            alt="Clothing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              <a  style={{textDecoration:"none", color:"skyblue"}} href="Cat2.js"> Shop now</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
        
        
        <div style={{ textAlign:"center", fontWeight:"bold", margin:"350px 400px", fontSize:"50px"}}>
                FEATURED PRODUCT

        </div>   

        <CardContent >
            <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"-272px", marginLeft:"40px"}}>
                Best Sellers in Book
            </Typography>
        </CardContent>
        
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr", boxShadow:"0 0 8px 0.01px", margin:"-300px 40px" , padding:"25px", backgroundColor:"white"}}>    
            
            <div style={{marginTop:"28px"}}>
                <Card sx={{ maxWidth:200 , padding:"8.4px", marginTop:"2px"}}>
                    <CardActionArea>
                            <CardMedia
                                component="img"
                                height="204"
                                image="https://m.media-amazon.com/images/I/71yNgTMEcpL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>

            <div style={{marginTop:"28px"}}>
                <Card sx={{ maxWidth:200 , padding:"8.4px", marginTop:"2px"}}>  
                    <CardActionArea >
                            <CardMedia
                                component="img"
                                height="205"
                                image="https://m.media-amazon.com/images/I/81Xy1ugiWeL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth:200}}>
                    <CardActionArea sx={{ padding:"10px"}}>   
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/71RxwXoyOFL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth:200  }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/91-Dqdv3a8L._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/91Ldk5Qz9sL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/81QsMIHzUkL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"30px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/812eE1lO0dL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
        </div>

        <CardContent >
            <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"390px", marginLeft:"40px"}}>
                 Popular items in this season
            </Typography>
        </CardContent>
        
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr", boxShadow:"0 0 8px 0.01px", margin:"-70px 40px" , padding:"25px", backgroundColor:"white"}}>    
            
            <div style={{marginTop:"28px"}}>
                <Card sx={{ maxWidth:200 , padding:"8.4px", marginTop:"3px"}}>
                    <CardActionArea>
                            <CardMedia
                                component="img"
                                height="204"
                                image="https://m.media-amazon.com/images/I/71l31QTSPtL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>

            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/51irVXBTIrL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/71tK-UqLSCL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/61ITggJrokL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/51dNOwNGEEL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/71ThCAq19+S._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginTop:"31px"}}>
                <Card sx={{ maxWidth:200 }}>
                    <CardActionArea sx={{ padding:"10px"}}>
                            <CardMedia
                                component="img"
                                height="202"
                                image="https://m.media-amazon.com/images/I/51dicdpovNL._AC_SY200_.jpg"
                                alt="Clothing"
                            />
                    </CardActionArea>
                </Card>
            </div>
{/*            
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr", margin:"300px 40px" , padding:"15px", background:"white"}}>    
            <div>
                <h2>hi</h2>
                <img src="https://m.media-amazon.com/images/I/51dicdpovNL._AC_SY200_.jpg"></img>
            </div>
            <div>
                <h2>hi</h2>
                <img src="https://m.media-amazon.com/images/I/51dicdpovNL._AC_SY200_.jpg"></img>
            </div>
            </div> */}

        </div>
    </div>
  )
}

export default Catlog