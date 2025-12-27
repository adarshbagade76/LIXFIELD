import React from 'react'

const products = [
  {
    title: 'Fruits & Vegetables',
    img: 'assests/Primary Icons/veggies.jpeg',
  },
  {
    title: 'Dry Fruits',
    img: 'assests/Primary Icons/dryfruits.jpeg',
  },
  {
    title: 'Spices',
    img: 'assests/Primary Icons/species.jpeg',
  },
  {
    title: 'Food & Grains',
    img: 'assests/Primary Icons/rice.jpeg',
  },
  {
    title: 'Eco Friendly Cutlery',
    img: 'assests/Primary Icons/ArecaLeafPlates1.jpeg',
  },
]

const Products: React.FC = () => {
  return (
    <section className="bg-black text-white py-20" style={{ backgroundColor: '#080712' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-gold-400 text-lg font-semibold mb-2" style={{ color: '#f7c948' }}>
            Explore
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Products</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We ensure to serve you the natural and organic products. Our promise is that “we will serve the finest”.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.title} className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-xl bg-gray-900">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover block"
                />
              </div>
              <h3 className="text-center text-2xl font-semibold text-white">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
