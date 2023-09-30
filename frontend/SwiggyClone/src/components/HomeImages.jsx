import React from 'react'

const HomeImages = () => {
  return (
   <div style={{marginTop:"100px", display : "grid", gridTemplateColumns:"1fr 1fr" }}>
        <div>
            <h4>Hungry?  </h4>
            <small>Order food from favourite restaurants near you.</small>
            <form>
            <input type='text' name='location' placeholder={"Enter your devlivery location"}></input>
            <button>FIND FOOD</button></form>
            <p>POPULAR CITIES IN INDIA </p>
            <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune& more.</p>
        </div>
        <div >
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq' height={500} width={"100%"}/>
        </div>
   </div>
   
   
   

  )
}

export default HomeImages

