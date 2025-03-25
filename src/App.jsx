import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

import Footer from './components/Footer.jsx'
import { Route, Routes } from "react-router-dom"
 
 
function App() {
  return (
   <>
      <div className="App">
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />


        </Routes>
        <Footer/>
      </div>
    </>
 );
  
}
 
export default App