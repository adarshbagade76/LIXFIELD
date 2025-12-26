import React from 'react'

const steps = [
  { id: '01', title: 'Material Handling', icon: 'meeting' },
  { id: '02', title: 'Packaging & Unitisation', icon: 'warehouse' },
  { id: '03', title: 'Document Clearance', icon: 'document' },
  { id: '04', title: 'Transportation', icon: 'truck' },
]

const Icon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'meeting':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20a4 4 0 018 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 11v2a4 4 0 004 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'warehouse':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7l9-4 9 4v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V12h6v10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'document':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2v6h6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'truck':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3h13v13H1z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 8h6l3 3v5h-3" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

const BusinessFlow: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${encodeURI('/assests/Primary Icons/AI Automation News.jpg')})` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold mb-10">How we work, our working process</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Icon name={s.icon} className="w-12 h-12" />
                </div>
                <span className="absolute -bottom-3 right-2 bg-emerald-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 border-white">{s.id}</span>
              </div>

              <p className="mt-6 text-orange-400 text-lg font-medium text-center max-w-xs">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessFlow
