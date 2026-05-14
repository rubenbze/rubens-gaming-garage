import '../styles/Videos.css'

function Videos() {

  const videos = [

    {
      title: 'Call of Duty Gameplay',

      video:
        'https://www.youtube.com/embed/ztjfwecrY8E',

      description:
        'High-intensity next-generation Call of Duty multiplayer gameplay.',

      tags:
        ['FPS', 'Action', 'AAA']
    },

    {
      title: 'Red Dead Redemption 2',

      video:
        'https://www.youtube.com/embed/eaW0tYpxyp0',

      description:
        'One of the greatest cinematic open-world adventures ever created.',

      tags:
        ['Open World', 'Story', 'Rockstar']
    },

    {
      title: 'The Last of Us',

      video:
        'https://www.youtube.com/embed/WxjeV10H1F0',

      description:
        'Emotional storytelling in a brutal post-apocalyptic world.',

      tags:
        ['Story', 'Survival', 'PlayStation']
    },

    {
      title: 'Elden Ring',

      video:
        'https://www.youtube.com/embed/E3Huy2cdih0',

      description:
        'Dark fantasy exploration from the creators of Dark Souls.',

      tags:
        ['Fantasy', 'RPG', 'FromSoftware']
    },

    {
      title: 'Apex Legends',

      video:
        'https://www.youtube.com/embed/oQtHENM_GZU',

      description:
        'Fast-paced battle royale action with legendary heroes.',

      tags:
        ['Battle Royale', 'FPS', 'Multiplayer']
    },

    {
  title: 'Grand Theft Auto VI',

  video:
    'https://www.youtube.com/embed/QdBZY2fkU-0',

  description:
    'Rockstar Games returns with Vice City, next-generation visuals, and cinematic open-world storytelling.',

  tags:
    ['Open World', 'Rockstar', 'GTA VI']
}

  ]

  return (

    <section className="videos-page">

      <h1>
        Gaming Cinematics
      </h1>

      <div className="videos-grid">

        {videos.map((video, index) => (

          <div
            className="video-card"
            key={index}
          >

            <iframe
              src={video.video}
              title={video.title}
              allowFullScreen
            />

            <div className="video-info">

              <h2>
                {video.title}
              </h2>

              <p>
                {video.description}
              </p>

              <div className="video-tags">

                {video.tags.map((tag, i) => (

                  <span key={i}>
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Videos