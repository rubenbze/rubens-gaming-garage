import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Games from './pages/Games'
import Shop from './pages/Shop'
import Videos from './pages/Videos'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App