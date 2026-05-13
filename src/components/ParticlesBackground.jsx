import Particles from "react-tsparticles"

function ParticlesBackground() {

  return (

    <Particles

      options={{

        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: "#60a5fa",
          },

          links: {
            color: "#60a5fa",

            distance: 140,

            enable: true,

            opacity: 0.2,

            width: 1,
          },

          move: {
            enable: true,

            speed: 1.2,
          },

          number: {
            value: 65,
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: 2,
          },
        },
      }}

    />

  )
}

export default ParticlesBackground