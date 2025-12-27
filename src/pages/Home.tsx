import React, { useState, useEffect } from 'react'
import Services from './Services'
import Products from './Products';
import Certification from './Certification';
import BusinessFlow from './BusinessFlow';
import { useNavigate } from 'react-router-dom';
import { openComposeEmail } from '../components/HeroContactButton/HeroContactButton';

const Home: React.FC = () => {
    const carouselImages: string[] = [
        '/assests/Primary%20Icons/company1img.jpeg',
        '/assests/Primary%20Icons/company2img.jpeg',
        '/assests/Primary%20Icons/company3img.jpeg'
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const navigate = useNavigate()

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((c) => (c + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(id);
    }, [carouselImages.length]);

    return (
        <>
            {/* ================= HERO / BANNER SECTION ================= */}
            <section className="relative min-h-screen flex items-start text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('assests/Primary Icons/shippimgimg2.jpg')`
                    }}
                />

                {/* Top-left label */}
                <p className="absolute top-8 left-6 sm:top-8 sm:left-10 text-2xl tracking-widest text-white font-extrabold z-20">
                    Your Trusted
                </p>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-28 md:text-xl lg:text-xl mt-4 pl-6 sm:pl-8 md:pl-12">

                    <h1 className="text-xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:whitespace-nowrap">
                        Partner In{' '}
                        <span className="text-yellow-400">International Trade!</span>
                    </h1>


                </div>

                {/* Contact button fixed to bottom-left of hero image */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20">
                    <div className="flex gap-4">
                        <button
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                            onClick={() => openComposeEmail('trade@globalexportslixfield.com')}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 pt-6 pb-12 lg:pt-8 lg:pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-xl text-yellow-300 font-bold mb-3 mt-2">About Our Company</p>

                        <h1 className="leading-none">
                            <span className="block text-3xl sm:text-4xl font-light">Welcome to</span>
                            <span className="block text-5xl sm:text-5xl font-extrabold tracking-tight text-zinc-600">LIXFIELD</span>
                            <span className="block text-yellow-400 text-xl sm:text-2xl mt-2 font-semibold whitespace-nowrap">
                                Bridging Markets, Delivering Values
                            </span>
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

                        <button className="mt-10 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-medium shadow-lg" onClick={() => navigate('/about-us')}>
                            More About Us
                        </button>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 max-w-xl">

                            {/* Global Export */}
                            <div className="flex items-center gap-3">
                                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18" />
                                </svg>
                                <span className="font-semibold">Global export solutions</span>
                            </div>

                            {/* Care & Quality */}
                            <div className="flex items-center gap-3">
                                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 21s-6-4.35-9-8.5A5.5 5.5 0 0112 5a5.5 5.5 0 019 7.5C18 16.65 12 21 12 21z" />
                                </svg>
                                <span className="font-semibold">Delivered with care & trust</span>
                            </div>

                            {/* Team */}
                            <div className="flex items-center gap-3">
                                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                    <path d="M16 3.13a4 4 0 010 7.75" />
                                </svg>
                                <span className="font-semibold">Experienced, responsive team</span>
                            </div>

                            {/* Logistics */}
                            <div className="flex items-center gap-3 whitespace-nowrap">
                                <svg className="w-7 h-7 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="1" y="3" width="15" height="13" />
                                    <path d="M16 8h4l3 5v3h-7" />
                                    <circle cx="5.5" cy="18.5" r="2.5" />
                                    <circle cx="18.5" cy="18.5" r="2.5" />
                                </svg>
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
            <Products />
            <Certification />
            <BusinessFlow />


        </>
    )
}

export default Home

