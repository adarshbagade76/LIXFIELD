import React, { useState, useEffect } from 'react'
import Services from './Services'
import Products from './Products';
import Certification from './Certification';
import BusinessFlow from './BusinessFlow';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const carouselImages: string[] = [
        '/assests/Primary%20Icons/company1img.jpeg',
        '/assests/Primary%20Icons/company2img.jpeg',
        '/assests/Primary%20Icons/company3img.jpeg'
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const navigate=useNavigate()

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((c) => (c + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(id);
    }, [carouselImages.length]);

    return  (
    <>
      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('/assests/Primary%20Icons/shippingImage.jpg')`
                    }}
                />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          <p className="text-lg tracking-widest text-gray-200 mb-4">
            Your Trusted
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Partner in{' '}
            <span className="text-yellow-400">international trade!</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold tracking-wide text-zinc-300">
            LIXFIELD
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Get a Free Quote
            </button>

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

            <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 pt-6 pb-12 lg:pt-8 lg:pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm text-yellow-300 font-bold mb-3 mt-2">About Our Company</p>

                        <h1 className="leading-none">
                            <span className="block text-3xl sm:text-4xl font-light">Welcome to</span>
                            <span className="block text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-800">Lixfield</span>
                            <span className="block text-yellow-400 text-2xl mt-2 font-semibold">Build Together without borders!</span>
                        </h1>

                        <p className="mt-8 text-gray-700 max-w-xl text-lg">
                            At Lixfield, we connect businesses across the globe with dependable export solutions. Backed by
                            deep industry experience, we handle logistics, compliance, and documentation with care to move
                            your products safely and on time.
                        </p>

                        <p className="mt-8 text-gray-700 max-w-xl text-lg">
                            Our focus on quality, transparency, and customer success makes us a trusted partner for
                            businesses looking to scale internationally. From tailored shipping plans to customs support,
                            we make global trade simpler.
                        </p>

                        <button className="mt-10 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-medium shadow-lg" onClick={()=>navigate('/career')}>
                            More About Us
                        </button>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 max-w-xl">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🌍</span>
                                <span className="font-semibold">Global export solutions</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">😊</span>
                                <span className="font-semibold">Delivered with care & smiles</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">👥</span>
                                <span className="font-semibold">Experienced, responsive team</span>
                            </div>

                            <div className="flex items-center gap-3 whitespace-nowrap">
                                <span className="text-2xl flex-shrink-0">🚚</span>
                                <span className="font-semibold">Seamless cross-border logistics</span>
                            </div>
                        </div>
                    </div>

                    {/** Carousel: 3 images, auto-advance. */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="w-full max-w-xl lg:max-w-3xl relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-transparent">
                                {/** Horizontal sliding track */}
                                <div
                                    className={`flex transition-transform duration-500 ease-out h-80 sm:h-96 lg:h-[36rem]`}
                                    style={{ transform: `translateX(-${currentSlide * 100}%)`, willChange: 'transform' }}
                                >
                                    {carouselImages.map((src, idx) => (
                                        <div key={src} className="flex-shrink-0 w-full h-full">
                                            <img
                                                src={src}
                                                alt={`Slide ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/** Dots / indicators */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex space-x-2">
                                    {carouselImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${idx === currentSlide ? 'bg-white' : 'bg-white/30'
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/** WhatsApp button moved to app-level for global display */}
                        </div>
                    </div>
                </div>
            </div>
         
      
         {/** OTHER SECTIONS BELOW THE HERO */}
        <Services />
        <Products/>
        <Certification/>
        <BusinessFlow />

      
        </>
    )
}

export default Home

