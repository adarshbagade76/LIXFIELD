import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderSection: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full relative">
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="assests/Primary Icons/lixfieldlogog.png"
                alt="Lixfield Logo"
                className="h-10 w-14 object-contain"
              />

              <span className="font-semibold text-base md:text-lg text-gray-900 leading-tight">
                Lixfield Import & Export LLP
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-12">
              {[
                { name: 'Home', to: '/' },
                { name: 'About Us', to: '/about-us' },
                { name: 'Career', to: '/career' },
                { name: 'Contact', to: '/contact-us' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="
                    text-sm font-medium text-gray-700
                    hover:text-[#08363b]
                    transition-colors duration-200
                    relative after:absolute after:-bottom-1 after:left-0
                    after:h-[2px] after:w-0 after:bg-[#08363b]
                    hover:after:w-full after:transition-all after:duration-300
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="block text-base font-medium text-gray-700 hover:text-[#08363b] transition py-1 space-y-5">
            {[
              { name: 'Home', to: '/' },
              { name: 'About Us', to: '/about-us' },
              { name: 'Career', to: '/career' },
              { name: 'Contact', to: '/contact-us' }

            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-[#08363b] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to avoid content overlap */}
      <div className="h-16 md:h-18" />
    </header>
  )
}

export default HeaderSection
