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

      {/* MOBILE BUTTON */}

      <div
        className="menu-toggle"

        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

      {/* DESKTOP NAV */}

      <div className={`nav-right ${menuOpen ? 'active' : ''}`}>

        <Link to="/">
          Home
        </Link>

        <div className="dropdown">

          <span>
            Gaming ▾
          </span>

          <div className="dropdown-menu">

            <Link to="/games">
              Games
            </Link>

            <Link to="/videos">
              Videos
            </Link>

            <Link to="/shop">
              Gear
            </Link>

          </div>

        </div>

      </div>

    </motion.nav>
  )
}

export default Navbar