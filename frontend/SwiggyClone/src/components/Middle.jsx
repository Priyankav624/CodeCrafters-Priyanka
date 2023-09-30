import React from 'react'

const Middle = () => {
  return (
    <div>

        <div style={{ display : "grid", gridTemplateColumns:"1fr 1fr 1fr", backgroundColor:"#B5651d" , columnGap:"100px" }}>
            <div style={{padding: "10px"}}>
                <h4>No Minimum Order</h4>
                <p>Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div style={{padding: "10px"}}>
            <h4>Live Order Tracking</h4>
                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div style={{padding: "10px"}}>
            <h4>Lightning-Fast Delivery</h4>
                <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
        </div>

        <h1 style={{color:"#000000 ", fontWeight: "bold", marginTop:"100px" ,marginRight:"200px", marginLeft:"50px", fontSize:"55px"}}> Restaurants in your pocket</h1>
              <p style={{marginLeft:"50px", fontSize:"20px", color:"#6a6c6d" , marginRight:"190px", marginBottom:"40px"}}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
    </div>
  )
}

export default Middle