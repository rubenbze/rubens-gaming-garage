import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>
          Ruben's Gaming Garage
        </h1>

        <p>
          Premium gaming gear, featured games,
          tech videos, and next-level setups.
        </p>

        <Link to="/games">
          <button>
            Explore Now
          </button>
        </Link>

      </section>

    </div>
  )
}

export default Home