import '../styles/Games.css'

function Games() {

  const games = [
    {
      title: "Cyberpunk 2077",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop",
      description:
        "Explore a futuristic open-world city filled with danger."
    },

    {
      title: "Call of Duty",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
      description:
        "Fast-paced tactical combat and multiplayer action."
    },

    {
      title: "Racing Legends",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
      description:
        "Arcade racing with intense high-speed competition."
    }
  ]

  return (
    <div className="games-page">

      <h1>🔥 Featured Games</h1>

      <div className="games-grid">

        {games.map((game, index) => (

          <div className="game-card" key={index}>

            <img src={game.image} alt={game.title} />

            <div className="game-overlay">

              <h2>{game.title}</h2>

              <p>{game.description}</p>

              <button>View Game</button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Games