// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing';
import Home from './views/Home';
import Register from './views/Register';
import Gallery from './views/Gallery';
import Navbar from './views/Navbar';
import LoginButton from './views/Login';
import LogoutButton from './views/Logout';
import Profile from "./views/Profile";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const location = useLocation()
  const [userShow,setUserShow] = useState({})
  async function ExercisesHome(){
    const indices =Array.from({ length: 30 }, (_, index) => index+1)
    const ejer = indices.map(async(indice) =>{
          const res = await fetch(`http://localhost:5002/exercises/${indice}`)
          const data = await res.json()
          return data
        })
    const allexer = await Promise.all(ejer)
    return allexer

  }

  

  return (
    <div className="App">
      {location!=="/"&&<Navbar setUserShow = {setUserShow} userShow = {userShow}/>}
      <Routes>
        <Route
          path='/' element={<Landing/>}
        />
        <Route
          path='/home' element={<Home ExercisesHome = {ExercisesHome}/>}
        />
        <Route
          path='/register' element = {<Register/>}
        />
        <Route
          path = "/gallery" element={<Gallery/>}
        />
        <Route
          path = "/profile" element={<Profile setUserShow={setUserShow} userShow={userShow}/>}
        />
          
      </Routes>
    </div>
  );
}

export default App
