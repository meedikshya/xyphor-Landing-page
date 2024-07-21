import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/HeroSection'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </div>
  )
}
