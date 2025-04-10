import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './Components/ColorButton'

function App() {
  const [bgcolor, setBgcolor] = useState('white')
  if(bgcolor === 'white'){
    document.body.style.backgroundColor = 'white';
  }else{
    document.body.style.backgroundColor = bgcolor;
  }

  return (
    <div>
      <ColorButton setBgcolor={setBgcolor}/>
    </div>
  )
}

export default App
