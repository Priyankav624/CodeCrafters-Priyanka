import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import BodyMain from './components/BodyMain'
import Footer from './components/footer'
import NavBar from './components/navbar'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
      <Router>
        <NavBar />
          <Routes >
              <Route path={"/"} element = {<BodyMain />} />
              <Route path={"/login"} element = {<Login />} />
              <Route path={"/signup"} element = {<Signup />} />
          </Routes>
        <Footer />
      </Router>
  
  )
}

export default App
