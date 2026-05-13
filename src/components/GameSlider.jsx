import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import '../styles/GameSlider.css'

const games = [
  {
    title: 'Cyberpunk 2077',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Valorante',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Fortnite',
    image:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop',
  },
]

function GameSlider() {
  return (
    <div className="slider-wrapper">

      <h2>
        Featured Games
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
      >

        {games.map((game) => (

          <SwiperSlide key={game.title}>

            <div
              className="slide-card"
              style={{
                backgroundImage: `url(${game.image})`,
              }}
            >

              <div className="slide-overlay">

                <h3>
                  {game.title}
                </h3>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default GameSlider