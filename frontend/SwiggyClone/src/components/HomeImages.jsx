import React, { useState, useEffect } from 'react';

const HomeImages = () => {
  const [Text, setText] = useState('');
  const alternativeTexts = ['Feeling Hungry?', 'Craving Food?', 'Need a Meal?', 'Movie Night?', 'Game Night?'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === alternativeTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [alternativeTexts]);

  useEffect(() => {
    setText(alternativeTexts[textIndex]);
  }, [textIndex]);

  return (
    <div>
    <div style={{marginTop:"130px", display : "grid", gridTemplateColumns:"1fr 1fr" }}>
          <div style={{margin:"40px"}}>
              <h1 style={{fontSize:"55px",fontWeight: "bold"}}> {Text}  </h1>
              <small style={{fontSize:"25px", color:"#b2beb5", fontWeight: "bold"}}>Order food from favourite restaurants near you.</small>
            <br/><br/> <br/>  <form style={{display:"grid" , gridTemplateColumns: "1fr 150px"}}>
              <input style={{height:"50px" ,border:"1px solid grey", width: "400px", padding: "10px",paddingLeft: "20px", fontSize:"20px", fontWeight: "bold"}} type='text' name='location' placeholder={"Enter your devlivery location"}></input>
              <button style={{backgroundColor: "#FFA500" , border: "none" , height:"72px", marginLeft:"-6px" ,fontWeight: "bold"}}>FIND FOOD</button>
              </form>
              <br/>
              <p style={{color:"#6a6c6d  ",fontWeight: "bold", fontSize:"25px"}}>POPULAR CITIES IN INDIA </p>
              <p style={{color:"#6a6c6d ",fontWeight: "bold" ,fontSize:"25px"}}>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune& more.</p>
          </div>
          
          <div>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq' />
          </div>
    </div>
    </div>
  )
}

export default HomeImages;

