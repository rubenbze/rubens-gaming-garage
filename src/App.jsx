import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ParticlesBackground from './components/ParticlesBackground'

import Home from './pages/Home'
import Games from './pages/Games'
import Shop from './pages/Shop'
import Videos from './pages/Videos'

function App() {

  return (

    <>

      <ParticlesBackground />

      <Cursor />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/games"
          element={<Games />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/videos"
          element={<Videos />}
        />

      </Routes>

      <Footer />

    </>

  )
}

export default App