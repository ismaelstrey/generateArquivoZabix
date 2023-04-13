import { FC, JSXElementConstructor, ReactNode, useState } from 'react'
import './App.css'
import HostProvider from './context/xmlContext'
import Home from './components/home/home'

function App() {

  return (
    <HostProvider>
      <div className="flex flex-col w-screen h-full bg-slate-600">
        <Home />
      </div>
    </HostProvider>

  )
}

export default App
