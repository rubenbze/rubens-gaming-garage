import '../styles/Games.css'

function Games() {

  const games = [

    {
      title: 'Call of Duty',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/capsule_616x353.jpg',

      genre: 'FPS / Action',

      year: '2025',

      rating: '8.5',

      platforms: 'PC • PlayStation • Xbox',

      description:
        'Intense cinematic warfare with next-generation multiplayer combat.',

      link:
        'https://store.steampowered.com/app/1938090/Call_of_Duty/'
    },

    {
      title: 'EA Sports FC 26',

      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop',

      genre: 'Football / Sports',

      year: '2025',

      rating: '8.2',

      platforms: 'PC • PlayStation • Xbox',

      description:
        'The future of football simulation with realistic gameplay and visuals.',

      link:
        'https://www.ea.com/games/ea-sports-fc'
    },

    {
      title: 'Red Dead Redemption 2',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg',

      genre: 'Open World / Western',

      year: '2019',

      rating: '9.9',

      platforms: 'PC • PlayStation • Xbox',

      description:
        'One of the greatest cinematic open-world adventures ever made.',

      link:
        'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
    },

    {
      title: 'Elden Ring',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg',

      genre: 'Fantasy / RPG',

      year: '2025',

      rating: '9.8',

      platforms: 'PC • PlayStation • Xbox',

      description:
        'A breathtaking dark fantasy adventure from FromSoftware.',

      link:
        'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },

    {
      title: 'Uncharted 4',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/capsule_616x353.jpg',

      genre: 'Adventure / Story',

      year: '2016',

      rating: '9.5',

      platforms: 'PC • PlayStation',

      description:
        'Nathan Drake’s legendary cinematic treasure hunting finale.',

      link:
        'https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/'
    },

    {
      title: 'Apex Legends',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_616x353.jpg',

      genre: 'Battle Royale',

      year: '2025',

      rating: '8.9',

      platforms: 'PC • PlayStation • Xbox',

      description:
        'Fast-paced squad combat with legendary heroes and abilities.',

      link:
        'https://store.steampowered.com/app/1172470/Apex_Legends/'
    },

    {
      title: 'The Last of Us',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/capsule_616x353.jpg',

      genre: 'Survival / Story',

      year: '2023',

      rating: '9.7',

      platforms: 'PC • PlayStation',

      description:
        'An emotional post-apocalyptic masterpiece with unforgettable storytelling.',

      link:
        'https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/'
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

              <span className="game-year">
                {game.year}
              </span>

              <h2>
                {game.title}
              </h2>

              <div className="hidden-info">

                <p className="genre">
                  {game.genre}
                </p>

                <p className="description">
                  {game.description}
                </p>

                <div className="game-meta">

                  <span>
                    ⭐ {game.rating}
                  </span>

                  <span>
                    {game.platforms}
                  </span>

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

          </div>

        ))}

      </div>

    </section>
  )
}

export default Games