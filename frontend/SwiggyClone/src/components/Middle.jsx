import React from 'react'

const Middle = () => {
  return (
    <div>

        <div style={{ display : "grid", gridTemplateColumns:"1fr 1fr 1fr", backgroundColor:"#3d2b1f " , columnGap:"100px" }}>
            <div style={{textAlign:"center",padding: "75px", color:"#ffffff"}}>
                <img style={{width: '100px', height: '100px' }}src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'></img>
                <h4>No Minimum Order</h4>
                <p>Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div style={{ textAlign:"center", padding: "75px", color:"#ffffff"}}>
                <img style={{ width: '50px', height: '100px' }} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'></img>
                <h4>Live Order Tracking</h4>
                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div style={{textAlign:"center",padding: "75px", color:"#ffffff"}}>
                <img style={{ width: '100px', height: '100px' }} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'></img>
                <h4>Lightning-Fast Delivery</h4>
                <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
        </div>
        <div style={{ display : "grid", gridTemplateColumns:"1fr 1fr"}}>
            <div>
                <h1 style={{color:"#000000 ", fontWeight: "bold", marginTop:"50px" , marginLeft:"80px", fontSize:"55px"}}> Restaurants in your pocket</h1>
                <p style={{marginLeft:"80px", fontSize:"20px", color:"#6a6c6d" ,  marginBottom:"40px"}}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <img style={{ width: '150px', height: '70px' , marginLeft:"80px"}}src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp'></img>
                <img style={{ width: '150px', height: '70px' , marginLeft:"80px"}}src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty'></img>
                
            </div>
            <div style={{textAlign:"center"}}>
                <img style={{ width: '250px', height: '400px' }}src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n'></img>
                <img style={{ width: '250px', height: '350px' ,marginBottom:"-5px"}}src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn'></img>

            </div>
        </div>
    </div>
  )
}

export default Middle