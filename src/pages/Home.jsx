import { motion } from 'framer-motion'

import '../styles/Home.css'

function Home() {

  return (

    <section className="hero">

      <motion.div
        className="hero-content"

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}
      >

        <h1>

          ENTER THE GARAGE

        </h1>

        <p>

          Welcome to Ruben’s Gaming Garage —
          your hub for AAA games,
          premium gaming gear,
          cinematic videos,
          and next-generation gaming experiences.

        </p>

        <div className="hero-buttons">

          <a href="/games">
            Explore Games
          </a>

          <a href="/shop">
            Gaming Gear
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Home