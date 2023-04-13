import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HostProvider from './context/xmlContext'
import Home from './componets/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HostProvider> <div className="App">
<Home>Olá</Home>
    </div></HostProvider>
   
  )
}

export default App
