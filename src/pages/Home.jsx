import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <motion.div
          className="hero-content"

          initial={{ opacity: 0, y: 60 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}
        >

          <h1>
            Ruben's Gaming Garage
          </h1>

          <p>
            Next-generation gaming setups,
            esports energy,
            anime culture,
            and immersive technology.
          </p>

          <Link to="/games">

            <motion.button

              whileHover={{
                scale: 1.08
              }}

              whileTap={{
                scale: 0.95
              }}
            >
              Enter The Garage
            </motion.button>

          </Link>

        </motion.div>

      </section>

    </div>
  )
}

export default Home