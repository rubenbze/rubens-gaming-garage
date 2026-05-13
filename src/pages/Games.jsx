import '../styles/Games.css'

const games = [

  {
    title: 'Call Of Duty',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',

    link:
      'https://store.steampowered.com/app/1938090/Call_of_Duty/'
  },

  {
    title: 'Battlefield 6',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',

    link:
      'https://www.ea.com/games/battlefield'
  },

  {
    title: 'FC 26',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop',

    link:
      'https://www.ea.com/games/ea-sports-fc'
  },

  {
    title: 'Apex Legends',
    image:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop',

    link:
      'https://store.steampowered.com/app/1172470/Apex_Legends/'
  },

]

function Games() {

  return (

    <section className="games-page">

      <h1>
        Featured Games
      </h1>

      <div className="games-grid">

        {games.map((game) => (

          <a
            href={game.link}

            target="_blank"

            className="game-card"

            key={game.title}
          >

            <div
              className="game-image"

              style={{
                backgroundImage: `url(${game.image})`
              }}
            >

              <div className="game-overlay">

                <h2>
                  {game.title}
                </h2>

                <p>
                  View on Steam
                </p>

              </div>

            </div>

          </a>

        ))}

      </div>

    </section>
  )
}

export default Games