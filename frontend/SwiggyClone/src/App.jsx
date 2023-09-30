import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import BodyMain from './components/BodyMain'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
      <Router>
        <NavBar />
          <Routes >
              <Route path={"/"} element = {<BodyMain />} />
          </Routes>
        <Footer />
      </Router>
  
  )
}

export default App
