import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Navigation from './Components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  )
}

export default App
