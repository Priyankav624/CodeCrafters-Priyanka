import React from "react";
import Images from "./Images";
const Home2 = () => {
  return (
    <div>

        <div style={{margin: "40px 90px" ,backgroundColor:"white", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", border:"1px solid white",borderRadius:"3px",boxShadow:"0 0 8px 0.01px", padding:"25px"}}>
            
            <div style={{display: "flex", margin:"5px", flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/72ec95ea3c99ee60.png?q=100 " height= "50px" width= "50px" alt="Clothing"/>
                <p> Mobiles and Tablets </p>
            </div>
        
            <div style={{display: "flex", margin:"5px", flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0dac5f7442d7fd5f.png?q=100 " height= "50px" width= "50px" alt="Clothing"/>
                <p>Electroins</p>
            </div>
        
            <div style={{display: "flex",margin:"5px", flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/eb336e40e5a1b6ec.png?q=100 " height= "50px" width= "50px" alt="Clothing"/>
                <p>Fashoin</p>
            </div>
            
            <div style={{display: "flex",margin:"5px",flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/92b1f08861995c5f.png?q=100 " height= "50px" width= "50px" alt="Clothing"/>
                <p>Home & Kitchen</p>
            </div>
            
            <div style={{display: "flex",margin:"5px", flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f4f8f26cdeb86ce4.png?q=100 " height= "50px" width= "50px" alt="Clothing"/>
                <p> Beauty</p>
            </div>
            
            <div style={{display: "flex", margin:"5px",flexDirection: "column" , justifyContent: "space-between", alignItems:"center"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/d47b98754854d054.png?q=100" height= "50px" width= "50px" alt="Clothing"/>
                <p>Furniture</p>
            </div>
            <div style={{display: "flex", margin:"5px",flexDirection: "column" , justifyContent: "space-between", alignItems:"center" , backgroundColor:"white"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/898880c3805043b1.png?q=100" height= "50px" width= "50px" alt="Clothing"/>
                <p>Grocery</p>
            </div>
            <div style={{display: "flex", margin:"5px",flexDirection: "column" , justifyContent: "space-between", alignItems:"center" , backgroundColor:"white"}}>
                <img src = "https://rukminim1.flixcart.com/fk-p-flap/43/43/image/436cd6fc952ae1cb.png?q=100" height= "50px" width= "50px" alt="Clothing"/>
                <p>Tv</p>
            </div>
        </div>
        
        <Images />
            <div style={{display:"grid",margin:"80px 80px", textAlign:"center", gridTemplateColumns:"1fr 1fr"}}>
                <div style={{border:"1px grey dashed", padding:"50px" , marginLeft:"30px",boxShadow:"0 0 8px 0.01px"}}>
                    <p>For all standard order</p>
                    <h3>FREE SHIPPING</h3>
                </div>
                <div style={{border:"1px grey dashed", padding:"50px", marginLeft:"80px",boxShadow:"0 0 8px 0.01px"}}>
                    <p>Only in 30 days</p>
                    <h3>FREE RETURNS</h3>
                </div>
            </div>

            <div>
                <div style={{ display: "flex", marginLeft:"-8px"}}>
                    <img src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg" alt="Clothing" width="1349px"></img>
                </div>
            </div>    
        </div>
  )
}

export default Home2