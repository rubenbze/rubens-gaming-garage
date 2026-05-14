import Particles from '@tsparticles/react'

function ParticlesBackground() {

  return (

    <Particles

      id="tsparticles"

      options={{

        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: {
            value: 'transparent',
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: '#60a5fa',
          },

          links: {

            color: '#60a5fa',

            distance: 150,

            enable: true,

            opacity: 0.2,

            width: 1,
          },

          move: {

            enable: true,

            speed: 1.3,
          },

          number: {

            value: 70,
          },

          opacity: {

            value: 0.3,
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