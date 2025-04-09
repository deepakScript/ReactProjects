import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crousel from './Components/Crousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Crousel />
    </div>
  )
}

export default App
