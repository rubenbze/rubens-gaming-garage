import {
  FaInstagram,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

import '../styles/Footer.css'

function Footer() {
  return (

    <footer className="footer">

      <h2>
        Contact The Garage
      </h2>

      <div className="footer-links">

        <a
          href="https://instagram.com/rubenbze"
          target="_blank"
        >
          <FaInstagram />

          @rubenbze
        </a>

        <a href="tel:6261182">

          <FaPhone />

          626-1182
        </a>

        <a href="mailto:rdonis83@gmail.com">

          <FaEnvelope />

          rdonis83@gmail.com
        </a>

      </div>

    </footer>
  )
}

export default Footer