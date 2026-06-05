import './App.css'
import { Home } from './pages/Home/Home'
import { AudioProvider } from './context/AudioContext'
import { AppRoutes } from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
      <AudioProvider>
        <BrowserRouter basename="/Listenify">
          <AppRoutes />
        </BrowserRouter>
      </AudioProvider>
    </>
  )
}

export default App
