import '../styles/Videos.css'

function Videos() {

  const videos = [
    {
      title: "Ultimate Gaming Setup",
      link:
        "https://www.youtube.com/embed/XcfBvMWS3X8"
    },

    {
      title: "Linus Tech Tips Gaming Build",
      link:
        "https://www.youtube.com/embed/BL4DCEp7blY"
    },

    {
      title: "Best Gaming Accessories",
      link:
        "https://www.youtube.com/embed/qUqjz3_9w9I"
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