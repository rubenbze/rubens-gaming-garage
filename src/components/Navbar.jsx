import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

import '../styles/Navbar.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <motion.nav
      className="navbar"

      initial={{ y: -100 }}

      animate={{ y: 0 }}

      transition={{ duration: 0.6 }}
    >

      <div className="logo">

        🎮 Ruben's Gaming Garage

      </div>

      {/* HAMBURGER BUTTON */}

      <div
        className="menu-toggle"

        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

      {/* NAV LINKS */}

      <div className={`nav-right ${menuOpen ? 'active' : ''}`}>

        <Link
          to="/"

          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/games"

          onClick={() => setMenuOpen(false)}
        >
          Games
        </Link>

        <Link
          to="/videos"

          onClick={() => setMenuOpen(false)}
        >
          Videos
        </Link>

        <Link
          to="/shop"

          onClick={() => setMenuOpen(false)}
        >
          Gear
        </Link>

      </div>

    </motion.nav>
  )
}

export default Navbar