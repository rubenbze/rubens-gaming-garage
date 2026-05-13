import '../styles/TwitchEmbed.css'

function TwitchEmbed() {

  return (

    <section className="twitch-section">

      <h2>
        Featured Gaming Videos
      </h2>

      <div className="twitch-grid">

        <iframe
          src="https://www.youtube.com/embed/2g811Eo7K8U"
          title="Gaming Video"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/n_Dv4JMiwK8"
          title="Gaming Trailer"
          allowFullScreen
        ></iframe>

      </div>

    </section>

  )
}

export default TwitchEmbed