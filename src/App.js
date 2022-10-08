import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
export default function App() {


const user = false ;



  return (
       <Box className='app'>
          

        
    <BrowserRouter>
  
    <Routes>
    <Route exact path='/' element={<Home  />} />
    <Route path='/Login' element={ user ? <Home /> : <Login  />} />
    <Route path='/Register' element={ user ? <Home /> : <Register />} />

    </Routes> 

    </BrowserRouter>
    
       </Box>
  )

}

  






































  /*
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const handleInc = () => {
    dispatch(increment())
  }
  const handleDec = () => {
    dispatch(decrement())
  }

  const handleFive = (vl) => {
    dispatch(incrementFive(1))
  }
  return (
    <div className='app'>
     
             <p>{count}</p>
             <p>{count <= 0 ? 'Negative' : 'Positive'}</p>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        <button onClick={handleFive}>IncFive</button>
      

    </div>
  )
}

*/