import React from 'react'
import AnimatedLogo from './AnimatedLogo'

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-sm tracking-widest text-gray-200 mb-4">SERVICES</h4>
            <ul className="space-y-2 text-lg" style={{ color: '#c69c3a' }}>
              <li>Exporting</li>
              <li>Importing</li>
              <li>All India Trading</li>
            </ul>
          </div>

          <div className="flex flex-col items-start text-left md:items-center md:text-center">
            <h4 className="text-sm tracking-widest text-gray-200 mb-4">CONTACT</h4>
            <p className="text-base mb-4 text-left md:text-center" style={{ color: '#c69c3a' }}>+91 6364268140</p>
            <p className="text-base mb-4 text-left md:text-center" style={{ color: '#c69c3a' }}>trade@globalexports.com</p>
              <div className="mt-4 w-36 h-36 mt-4 flex items-center justify-center self-end">
                  <AnimatedLogo src="assests/Primary Icons/logointro.mp4" size={220} />
                </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm tracking-widest text-gray-200 mb-4">ADDRESS</h4>
            <div className="text-base text-left md:text-right" style={{ color: '#c69c3a' }}>
              <p className="font-semibold">Head Office:</p>
              <p>RS NO 248 PLOT NO 23 Masari NISARGA BADAVANE </p>
              <p>GADAG Karnataka 582101</p>
            </div>

              
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">Copyright 2025 LIXFIELD</p>

            <div className="flex items-center gap-4">
              <a href="/" aria-label="Instagram" className="text-white bg-transparent border border-white rounded-full w-8 h-8 flex items-center justify-center">IG</a>
              <a href="/" aria-label="Facebook" className="text-white bg-transparent border border-white rounded-full w-8 h-8 flex items-center justify-center">f</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
