import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

<h2>🎮 Ruben's Gaming Garage</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/games">Games</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/videos">Videos</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar