import '../styles/Shop.css'

function Shop() {

  const products = [

    {
      name: 'DualSense Edge Controller',

      price: '$199.99',

      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1974&auto=format&fit=crop',

      description:
        'Sony’s elite PlayStation controller with customizable back buttons and premium precision.',

      specs:
        'PS5 • Wireless • Pro Controller',

      link:
        'https://www.amazon.com/s?k=DualSense+Edge+Wireless+Controller'
    },

    {
  name: 'LG UltraGear OLED Monitor',

  price: '$899.99',

  image:
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2070&auto=format&fit=crop',

      description:
        'Ultra-smooth OLED gaming with incredible colors and lightning-fast response times.',

      specs:
        'OLED • 240Hz • 1440p',

      link:
        'https://www.amazon.com/s?k=LG+UltraGear+OLED+Gaming+Monitor'
    },

    {
      name: 'Secretlab TITAN Evo',

      price: '$549.99',

      image:
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1974&auto=format&fit=crop',

      description:
        'Professional ergonomic gaming chair built for comfort during long gaming sessions.',

      specs:
        'Ergonomic • Premium Leather • Adjustable',

      link:
        'https://secretlab.co/'
    },

    {
      name: 'SteelSeries Arctis Nova Pro',

      price: '$349.99',

      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',

      description:
        'Premium gaming audio with crystal-clear directional sound and immersive bass.',

      specs:
        'Wireless • Noise Cancelling • Spatial Audio',

      link:
        'https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+Pro'
    },

    {
      name: 'Logitech G Pro X Superlight',

      price: '$159.99',

      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=2070&auto=format&fit=crop',

      description:
        'Ultra-lightweight esports gaming mouse trusted by competitive professionals.',

      specs:
        'Wireless • Ultra-Light • HERO Sensor',

      link:
        'https://www.amazon.com/s?k=Logitech+G+Pro+X+Superlight'
    },

    {
      name: 'Razer Huntsman V3 Pro',

      price: '$249.99',

      image:
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2070&auto=format&fit=crop',

      description:
        'Competitive RGB gaming keyboard with ultra-fast optical switches and stunning lighting.',

      specs:
        'RGB • Optical Switches • Esports',

      link:
        'https://www.amazon.com/s?k=Razer+Huntsman+V3+Pro'
    }

  ]

  return (

    <section className="shop-page">

      <h1>
        Elite Gaming Gear
      </h1>

      <div className="shop-grid">

        {products.map((product, index) => (

          <div
            className="product-card"
            key={index}
          >

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-info">

              <h2>
                {product.name}
              </h2>

              <p>
                {product.price}
              </p>

              <div className="product-hover">

                <span>
                  {product.specs}
                </span>

                <small>
                  {product.description}
                </small>

              </div>

              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
              >
                View Product
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Shop