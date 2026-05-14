import '../styles/Shop.css'

function Shop() {

  const products = [

    {
      name: 'DualSense Controller',

      price: '$69.99',

      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    },

    {
      name: 'Gaming Headset',

      price: '$89.99',

      image:
        'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2070&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    },

    {
      name: 'Mechanical Keyboard',

      price: '$119.99',

      image:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    },

    {
      name: 'Gaming Mouse',

      price: '$59.99',

      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=2070&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    },

    {
      name: 'Gaming Monitor',

      price: '$299.99',

      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2070&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    },

    {
      name: 'Gaming Chair',

      price: '$249.99',

      image:
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2074&auto=format&fit=crop',

      link:
        'https://www.amazon.com/'
    }

  ]

  return (

    <section className="shop-page">

      <h1>
        Gaming Gear
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

              <a
                href={product.link}

                target="_blank"

                rel="noreferrer"
              >
                Buy Now
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Shop