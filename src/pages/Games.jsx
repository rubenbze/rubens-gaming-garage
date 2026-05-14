import '../styles/Games.css'

function Games() {

  const games = [

    {
      title: 'Call of Duty',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/capsule_616x353.jpg',

      genre: 'FPS / Action',

      year: '2025',

      link:
        'https://store.steampowered.com/app/1938090/Call_of_Duty/'
    },

    {
      title: 'EA Sports FC 26',

      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop',

      genre: 'Sports / Football',

      year: '2025',

      link:
        'https://www.ea.com/games/ea-sports-fc'
    },

    {
      title: 'Grand Theft Auto VI',

      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop',

      genre: 'Open World / Crime',

      year: '2025',

      link:
        'https://www.rockstargames.com/VI'
    },

    {
      title: 'Elden Ring',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg',

      genre: 'Fantasy / RPG',

      year: '2025',

      link:
        'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },

    {
      title: 'Uncharted 4',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/capsule_616x353.jpg',

      genre: 'Adventure / Story',

      year: '2016',

      link:
        'https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/'
    },

    {
      title: 'Apex Legends',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_616x353.jpg',

      genre: 'Battle Royale',

      year: '2025',

      link:
        'https://store.steampowered.com/app/1172470/Apex_Legends/'
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