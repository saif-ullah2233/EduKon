import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./image/logo.png";
import { HomeContainer } from './components/Homecontainer';
import { TopBare } from './components/Topbare';

function App() {

 
  return (
    <>
      <div>
      <TopBare />
      </div>
      <div>
        <HomeContainer />
      </div>
    </>
  )
}

export default App
