import '../styles/Videos.css'

function Videos() {

  const videos = [
    {
      title: "Luffy Transforms to Gear 5 for Rob Lucci | One Piece",
  link:
    "https://www.youtube.com/embed/scPBmrzdD0g"
    },

    {
      title: "Linus Tech Tips Gaming Build",
      link:
        "https://www.youtube.com/embed/BL4DCEp7blY"
    },

    {
      title: "Hottest Game of 2026?",
  link:
    "https://www.youtube.com/embed/QdBZY2fkU-0"
    }
  ] 

  return (
    <div className="videos-page">

      <h1>🎥 Featured Gaming Videos</h1>

      <div className="videos-grid">

        {videos.map((video, index) => (

          <div className="video-card" key={index}>

            <iframe
              src={video.link}
              title={video.title}
              allowFullScreen
            ></iframe>

            <h2>{video.title}</h2>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Videos