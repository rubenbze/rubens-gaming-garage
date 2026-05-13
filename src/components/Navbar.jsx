import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../styles/Navbar.css'

function Navbar() {
  return (

    <motion.nav
      className="navbar"

      initial={{ y: -80 }}

      animate={{ y: 0 }}

      transition={{ duration: 0.6 }}
    >

      <h2>
        🎮 Ruben's Gaming Garage
      </h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">

          <span>Gaming ▾</span>

          <div className="dropdown-menu">

            <Link to="/games">
              Games
            </Link>

            <Link to="/videos">
              Videos
            </Link>

          </div>

        </li>

        <li>
          <Link to="/shop">Gear</Link>
        </li>

      </ul>

    </motion.nav>
  )
}

export default Navbar