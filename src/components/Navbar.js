'use client'

import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import {
  FaBattleNet,
  FaArrowRight,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#Home')
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  const handleMouseEnter = link => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
    setHoveredLink(link)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredLink(null)
    }, 500) // Delay hiding the dropdown
    setDropdownTimeout(timeout)
  }

  return (
    <nav className='shadow-sm'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4 md:py-6 lg:py-8'>
        {/* Hamburger Icon for Smaller Screens */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className='text-white hover:brightness-90 hover:filter'
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Logo */}
        {!isMobileMenuOpen && (
          <div className='flex flex-1 justify-center md:flex-none'>
            <a href='/' className='flex'>
              <FaBattleNet size={40} className='text-white' />
            </a>
          </div>
        )}

        {/* Navigation Links for Medium and Larger Screens */}
        <div className='hidden flex-1 items-center justify-center space-x-4 md:flex lg:space-x-12'>
          {['#Home', '#About', '#Services', '#Contact'].map(link => (
            <div
              key={link}
              className='group relative flex items-center'
              onMouseEnter={() => handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={link}
                onClick={() => setActiveLink(link)}
                className={`relative flex items-center pl-6 text-base text-white md:text-lg ${activeLink === link || hoveredLink === link ? 'brightness-90 filter' : ''} hover:brightness-90 hover:filter`}
              >
                {link.slice(1)} {/* Displays link text without '#' */}
                {link === '#About' && (
                  <FaChevronDown
                    className={`ml-2 transition-colors duration-300 ${hoveredLink === '#About' ? 'brightness-90 filter' : ''}`}
                    size={14}
                  />
                )}
              </a>
              {link === '#About' && (
                <div
                  className={`absolute left-0 top-full mt-1 w-48 border bg-white shadow-lg transition-opacity duration-300 ${hoveredLink === '#About' ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  <div
                    className={`flex items-center p-2 ${activeLink === '#AboutUs' ? 'brightness-90 filter' : ''}`}
                  >
                    <a
                      href='#AboutUs'
                      className='block px-4 py-2 hover:text-red-700 hover:brightness-90 hover:filter'
                      onClick={() => setActiveLink('#AboutUs')}
                    >
                      About Us
                    </a>
                  </div>
                  <div
                    className={`flex items-center p-2 ${activeLink === '#Mission' ? 'brightness-90 filter' : ''}`}
                  >
                    <a
                      href='#Mission'
                      className='block px-4 py-2 hover:text-red-700 hover:brightness-90 hover:filter'
                      onClick={() => setActiveLink('#Mission')}
                    >
                      Mission
                    </a>
                  </div>
                </div>
              )}
              <FaArrowRight
                className={`absolute right-full top-1/2 -translate-y-1/2 transform transition-colors duration-300 ${activeLink === link || hoveredLink === link ? 'text-white opacity-100 brightness-90 filter' : 'text-white opacity-0'}`}
                size={16}
              />
            </div>
          ))}
        </div>

        {/* Search and Button for Medium and Larger Screens */}
        <div className='hidden items-center space-x-4 md:flex'>
          <button className='mr-3 text-white hover:brightness-90 hover:filter'>
            <BiSearchAlt size={30} />
          </button>
          <button className='rounded border border-white px-5 py-3 text-white hover:bg-white hover:text-red-800'>
            Free Consultancy
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 transform bg-red-800 shadow-lg transition-transform md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className='flex flex-col items-center space-y-4 pt-8'>
          {/* Close Icon */}
          <div className='absolute right-4 top-4'>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='text-white hover:brightness-90 hover:filter'
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className='text-lg font-bold text-white'>
            <a href='/' className='flex justify-center'>
              <FaBattleNet size={40} />
            </a>
          </div>
          {['#Home', '#About', '#Services', '#Contact'].map(link => (
            <a
              key={link}
              href={link}
              onClick={() => {
                setActiveLink(link)
                setIsMobileMenuOpen(false) // Close menu after clicking
              }}
              className={`text-lg ${activeLink === link ? 'brightness-90 filter' : ''} hover:brightness-90 hover:filter`}
            >
              {link.slice(1)} {/* Displays link text without '#' */}
            </a>
          ))}
          <button className='text-white hover:brightness-90 hover:filter'>
            <BiSearchAlt size={24} />
          </button>
          <button className='rounded border border-white px-4 py-2 text-white hover:bg-white hover:text-red-800'>
            Free Consultancy
          </button>
        </div>
      </div>
    </nav>
  )
}
