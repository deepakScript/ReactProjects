import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-cyan-700 text-center'>
        Hello World
      </div>
    </>
  )
}

export default App
