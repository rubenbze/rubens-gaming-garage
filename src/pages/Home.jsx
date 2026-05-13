import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>
            Ruben's Gaming Garage
          </h1>

          <p>
            Premium gaming setups,
            next-gen gear,
            esports energy,
            and immersive tech experiences.
          </p>

          <Link to="/games">

            <button>
              Explore The Garage
            </button>

          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home