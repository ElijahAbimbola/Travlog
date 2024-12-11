import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Home/Navbar'
import HeroSection from './Home/HeroSection'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        < Navbar />
        <HeroSection/>
      </div>
    </>
  )
}

export default App
