import React from "react";
import Home2 from "./MainPage/Home2";
import Catlog from "./MainPage/Catlog";
import Deal from "./MainPage/Deal";

const HomePage = () => {
  return (
    <div style={{ marginTop:"130px",  backgroundColor:"gainsboro"}}>
        <Home2 />
        <Catlog />
        <Deal />
    </div>
  )
}

export default HomePage