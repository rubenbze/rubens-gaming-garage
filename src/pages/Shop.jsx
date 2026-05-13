import '../styles/Shop.css'

function Shop() {

  const products = [
    {
      name: "HyperX Gaming Keyboard",
      price: "$129",

      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop",

      link:
        "https://www.amazon.com/s?k=hyperx+gaming+keyboard"
    },

    {
      name: "Logitech Gaming Mouse",
      price: "$79",

      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=2070&auto=format&fit=crop",

      link:
        "https://www.amazon.com/s?k=logitech+gaming+mouse"
    },

    {
      name: "SteelSeries Headset",
      price: "$149",

      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2070&auto=format&fit=crop",

      link:
        "https://www.amazon.com/s?k=steelseries+gaming+headset"
    }
  ]

  return (
    <div className="shop-page">

      <h1>🛒 Gaming Gear</h1>

      <div className="shop-grid">

        {products.map((product, index) => (

          <div className="product-card" key={index}>

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-info">

              <h2>{product.name}</h2>

              <p>{product.price}</p>

              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  View on Amazon
                </button>
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Shop