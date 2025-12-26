import React from 'react'

type Opening = {
  id: number
  title: string
  location: string
  type: string
}

const openings: Opening[] = [
  { id: 1, title: 'Front-end Designer', location: 'Sydney, Australia', type: 'Full Time' },
  { id: 2, title: 'Lead Designer', location: 'San Francisco, USA', type: 'Remote' },
  { id: 3, title: 'Head Of Idea', location: 'Sidney, Australia', type: 'Full Time' },
  { id: 4, title: 'Front-end Designer', location: 'Sydney, Australia', type: 'Full Time' },
  { id: 5, title: 'Head Of Idea', location: 'Sidney, Australia', type: 'Full Time' },
]

const CareersPage: React.FC = () => {
  return (
    <main className="min-h-screen text-zinc-800">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">Careers</h1>
        <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatemto the lorem impsu remque laudantium, totam re veritat.
        </p>

        <h2 className="mt-12 text-2xl font-extrabold text-center">Why work with us?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4 p-6 bg-white shadow rounded">
            <div className="text-3xl">🍽️</div>
            <h3 className="font-semibold">Catered Meals</h3>
            <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium to doloremque laudantium lorem lorem ipsum.</p>
          </div>

          <div className="flex flex-col items-start gap-4 p-6 bg-white shadow rounded">
            <div className="text-3xl">💧</div>
            <h3 className="font-semibold">Health Care</h3>
            <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium to doloremque laudantium lorem lorem ipsum.</p>
          </div>

          <div className="flex flex-col items-start gap-4 p-6 bg-white shadow rounded">
            <div className="text-3xl">🧑‍💻</div>
            <h3 className="font-semibold">Flexible Environment</h3>
            <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium to doloremque laudantium lorem lorem ipsum.</p>
          </div>
        </div>

        <section className="mt-16 bg-gray-50 p-10 rounded">
          <h3 className="text-3xl font-extrabold text-center">Similar Openings</h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((o) => (
              <article key={o.id} className="bg-white p-6 rounded shadow-sm border">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-semibold">{o.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{o.location}</p>
                  </div>

                  <div className="text-xs inline-flex items-center px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    {o.type}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a className="text-sm text-emerald-600 font-medium" href="#">View & Apply</a>
                  <button className="text-sm px-3 py-2 bg-white border rounded hover:shadow">Save</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default CareersPage
