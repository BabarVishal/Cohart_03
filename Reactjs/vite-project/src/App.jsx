import React from 'react'
import {BrowserRouter, Router, Route, Link} from "react-router-dom"
import Home from './componats/Home'
import About from './componats/About'

function App() {
  return (
        <>
            {/* <BrowserRouter>
               <Router>
                <Route path='/' element={<Home/>}/>
                 <Route path='/About' element={<About/>}/>
               </Router>
            </BrowserRouter> */}
            <Home/>
        </> 
  )
}
 
export default App    
