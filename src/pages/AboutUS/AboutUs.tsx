import React from 'react'

const AboutUs: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-sm text-amber-500 font-semibold mb-2">About Our Company</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#08363b] mb-4">Lixfield Import And Export LLP</h1>
                    <div className="prose max-w-4xl  text-gray-700 style={{ fontFamily: 'Roboto, sans-serif' }}">
                        <p>
                            Lixfield Import And Export LLP is a trusted international trading partner specializing in
                            sourcing, exporting, and delivering quality goods worldwide. We combine deep market knowledge
                            with robust logistics and compliance capabilities to help manufacturers, wholesalers, and
                            retailers move products across borders efficiently and reliably.
                        </p>
                        <p>
                            Our services include supplier vetting, quality inspection coordination, customs documentation,
                            freight forwarding coordination, and end-to-end shipment tracking. We pride ourselves on
                            transparent pricing, timely communication, and a customer-first approach that simplifies
                            international trade for businesses of all sizes.
                        </p>
                    </div>

                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                            <span><img src='assests/Primary Icons/companyImgLogo.jpeg' alt='About Us Illustration' className="w-full h-full object-cover" /></span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#08363b] mb-2">Global Reach, Local Care</h3>
                            <p className="text-gray-600">We handle every shipment with care — from origin to destination.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-0">
                <div className="max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex gap-6 items-start">




                    {/* Content */}
                    <section className="mt-16">
                        <div
                            className="
      w-full
      rounded-xl
      shadow-sm
      border border-rose-200
      bg-rose-50
      p-5 sm:p-8
      flex flex-col sm:flex-row
      gap-4 sm:gap-6
      items-start
    "
                        >


                            {/* Content */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-[#08363b] mb-2">
                                    Our Vision
                                </h2>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    To be a leading, trusted facilitator of global trade by empowering businesses
                                    to reach new markets with integrity, efficiency, and sustainability. We
                                    envision a world where borders are no longer a barrier to growth.
                                </p>
                            </div>
                        </div>
                    </section>



                </div>
            </section>
            <section className="mt-14">
                <h2 className="text-2xl font-bold text-[#08363b] mb-6">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card */}
                    <div className="rounded-xl shadow-sm border border-rose-200 bg-rose-50 p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center text-xl">
                            🚚
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                End-to-end Service
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Complete export lifecycle management from sourcing to delivery.
                            </p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="rounded-xl shadow-sm border border-rose-200 bg-rose-50 p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center text-xl">
                            📑
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Regulatory Expertise
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Accurate documentation and customs compliance without delays.
                            </p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="rounded-xl shadow-sm border border-rose-200 bg-rose-50 p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center text-xl">
                            💰
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Transparent Pricing
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Clear, honest quotes with no hidden charges.
                            </p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="rounded-xl shadow-sm border border-rose-200 bg-rose-50 p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center text-xl">
                            🤝
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Customer-first
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Dedicated support with proactive communication.
                            </p>
                        </div>
                    </div>

                </div>
            </section>






            <section className="mt-12 max-w-3xl">
                <h2 className="text-xl font-bold text-[#08363b] mb-3">Get in touch</h2>
                <p className="text-gray-700 mb-4">Interested in working together? Reach out to our sales team and we'll tailor a plan for your needs.</p>
                <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-amber-400 text-white font-medium">Contact Us</a>
            </section>
        </div>
    )
}

export default AboutUs
