import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

import Home from './pages/Home'
import Games from './pages/Games'
import Shop from './pages/Shop'
import Videos from './pages/Videos'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2200)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/games" element={<Games />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/videos" element={<Videos />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App