import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import BodyMain from './components/BodyMain'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import { RecoilRoot } from "recoil"
import Order from './components/Order'
import Hotel from './components/Hotel'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <NavBar />
          <Routes >
              <Route path={"/"} element = {<BodyMain />} />
              <Route path={"/login"} element = {<Login />} />
              <Route path={"/signup"} element = {<Signup />} />
              <Route path={"/order"} element={<Order />} />
              <Route path={"/hotel"} element={<Hotel />} />
          </Routes>
        <Footer />
      </Router>
    </RecoilRoot>
  
  )
}

export default App
