import '../styles/Games.css'

function Games() {

  const games = [

    {
      title: 'Call Of Duty',

      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',

      link:
        'https://store.steampowered.com/app/1938090/Call_of_Duty/'
    },

    {
      title: 'Battlefield',

      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg',

      link:
        'https://www.ea.com/games/battlefield'
    },

    {
      title: 'EA Sports FC',

      image:
        'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg',

      link:
        'https://www.ea.com/games/ea-sports-fc'
    },

    {
      title: 'Apex Legends',

      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',

      link:
        'https://store.steampowered.com/app/1172470/Apex_Legends/'
    },

  ]

  return (

    <section className="games-page">

      <h1>
        Featured Games
      </h1>

      <div className="games-grid">

        {games.map((game, index) => (

          <a
            key={index}

            href={game.link}

            target="_blank"

            rel="noreferrer"

            className="game-card"
          >

            <img
              src={game.image}

              alt={game.title}
            />

            <h2>
              {game.title}
            </h2>

          </a>

        ))}

      </div>

    </section>

  )
}

export default Games