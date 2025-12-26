import React from 'react'

const features = [
  {
    number: '01.',
    title: 'We Export most of the FMCG Products',
  },
  {
    number: '02.',
    title: 'We  mainly import all types of items',
  },
  {
    number: '03.',
    title: 'We do all trading in all over the world',
  },
]

const logos = [
  { alt: 'FSSAI', src: '/assests/Primary%20Icons/fssai-logo-png.png' },
  { alt: 'MSME', src: '/assests/Primary%20Icons/MSME.jpeg' },
  { alt: 'APEDA', src: '/assests/Primary%20Icons/APEDA.jpeg' },
  { alt: 'Make in India', src: '/assests/Primary%20Icons/makeinIndia.jpeg' },
  { alt: 'Spices Board', src: '/assests/Primary%20Icons/speceiesLicies.jpeg' },
]

const Certification: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-semibold text-lg">
                    {f.number.replace('.', '')}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                    {f.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-12 bg-gray-50 rounded-lg mt-6">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Certifications & Registrations</h3>
              <p className="text-sm text-gray-500">Trusted by government boards and trade associations</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-stretch py-6">
              {logos.map((l) => (
                <div key={l.alt} className="flex items-center justify-center bg-white rounded shadow-sm h-40 md:h-48 p-0">
                  <img src={l.src} alt={l.alt} className="w-full h-full object-contain p-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
