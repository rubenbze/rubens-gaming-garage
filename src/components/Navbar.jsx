import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../styles/Navbar.css'

function Navbar() {

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

      <div className="nav-right">

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

          </div>

        </div>

        <Link to="/shop">
          Gear
        </Link>

      </div>

    </motion.nav>
  )
}

export default Navbar