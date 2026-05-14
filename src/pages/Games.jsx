import '../styles/Games.css'

function Games() {

  const games = [

    {
      title: 'Call of Duty',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
      genre: 'FPS / Action',
      year: '2025',
      link: 'https://store.steampowered.com/app/1938090/Call_of_Duty/'
    },

    {
      title: 'Battlefield 6',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
      genre: 'War / Tactical Shooter',
      year: '2025',
      link: 'https://www.ea.com/games/battlefield'
    },

    {
      title: 'EA Sports FC 26',
      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop',
      genre: 'Sports / Football',
      year: '2025',
      link: 'https://www.ea.com/games/ea-sports-fc'
    },

    {
      title: 'Apex Legends',
      image:
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop',
      genre: 'Battle Royale',
      year: '2025',
      link: 'https://store.steampowered.com/app/1172470/Apex_Legends/'
    }

  ]

  return (

    <section className="games-page">

      <h1>
        Featured Games
      </h1>

      <div className="games-grid">

        {games.map((game, index) => (

          <div
            className="game-card"

            key={index}
          >

            <img
              src={game.image}

              alt={game.title}
            />

            <div className="game-overlay">

              <div>

                <span className="game-year">
                  {game.year}
                </span>

                <h2>
                  {game.title}
                </h2>

                <p>
                  {game.genre}
                </p>

              </div>

              <a
                href={game.link}

                target="_blank"

                rel="noreferrer"
              >
                View Game
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Games