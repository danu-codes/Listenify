import './App.css'
import { Home } from './pages/Home/Home'
import { AudioProvider } from './context/AudioContext'

function App() {
  return (
    <>
      <AudioProvider>
        <Home />
      </AudioProvider>

    </>
  )
}

export default App
