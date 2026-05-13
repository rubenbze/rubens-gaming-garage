import '../styles/TwitchEmbed.css'

function TwitchEmbed() {
  return (
    <section className="twitch-section">

      <h2>
        Live Twitch Streams
      </h2>

      <div className="twitch-grid">

        <iframe
          src="https://player.twitch.tv/?channel=shroud&parent=localhost"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://player.twitch.tv/?channel=ninja&parent=localhost"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  )
}

export default TwitchEmbed