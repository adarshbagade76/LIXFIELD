import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderSection from './components/Layout/HeaderSection'
import WhatsAppButton from './components/Layout/WhatsAppButton'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Certification from './pages/Certification'
import BusinessFlow from './pages/BusinessFlow'
import FooterSection from './components/Footer/FooterSection'
import AboutUs from './pages/AboutUS/AboutUs'
import  ContactUS from './pages/Contact US/ContactUS'
import CareersPage from './pages/Careers/CareersPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <HeaderSection />

        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/business-flow" element={<BusinessFlow />} />
            <Route path="/about-us" element={<AboutUs />} />
             <Route path="/contact-us" element={<ContactUS />} />
             <Route path='/career' element={<CareersPage />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <FooterSection />
      </div>
    </BrowserRouter>
  )
}

export default App
