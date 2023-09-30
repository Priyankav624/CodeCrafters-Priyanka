import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import BodyMain from './assets/components/BodyMain'
import Footer from './assets/components/Footer'
import NavBar from './assets/components/NavBar'

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
